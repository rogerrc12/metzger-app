import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { loginUserCall, logoutUserCall, recoverPasswordCall, resetPasswordCall, verifyCodeCall } from "../../api/auth";
import { deleteFromStore, getFromStore, saveInStore } from "../../helpers/secure-store";
import * as RootNavigation from "../../navigation/root.navigation";

export const loginUser = createAsyncThunk("@auth/login_user", async (values) => {
  try {
    const data = await loginUserCall(values);

    await saveInStore("accessToken", { token: data.accessToken, expiration: new Date(new Date().getTime() + data.expiresIn) });
    await saveInStore("userData", data.user);
    await saveInStore("refreshToken", data.refreshToken);

    return data.user;
  } catch (error) {
    const status = error.status || error.response.status;

    Alert.alert(
      "Error al iniciar sesión",
      status === 401 ? "Las credenciales son inválidas. Por favor verifica e intenta de nuevo." : "Ha ocurrido un error inesperado, por favor intenta de nuevo.",
      [{ text: "Aceptar" }]
    );

    throw new Error(error.message);
  }
});

export const loadSession = createAsyncThunk("@auth/load_session", async (_, thunkAPI) => {
  try {
    const accessToken = await getFromStore("accessToken");

    if (!accessToken) return thunkAPI.rejectWithValue("");

    if (new Date(accessToken.expiration) <= new Date()) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("");
    }

    const user = await getFromStore("userData");

    if (!user) return thunkAPI.dispatch(logoutUser());

    return user;
  } catch (error) {
    console.error(error);
  }
});

export const logoutUser = createAsyncThunk("@auth/logout_user", async () => {
  try {
    await logoutUserCall();
  } catch (error) {
    console.log(error);
  }

  await deleteFromStore("accessToken");
  await deleteFromStore("userData");
  await deleteFromStore("refreshToken");
});

export const recoverPassword = createAsyncThunk("@auth/recover_password", async (values) => {
  try {
    await recoverPasswordCall(values);
    RootNavigation.navigate("VerifyCode", { email: values.email });
  } catch (error) {
    throw new Error(error.message);
  }
});

export const verifyCode = createAsyncThunk("@auth/verify_code", async (values) => {
  try {
    await verifyCodeCall(values);
    RootNavigation.navigate("ResetPassword", { code: values.code });
  } catch (error) {
    throw new Error(error.message);
  }
});

export const resetPassword = createAsyncThunk("@auth/reset_password", async (values) => {
  try {
    await resetPasswordCall(values);

    Alert.alert("Contraseña cambiada", "Ya puedes inicia sesión con tu nueva contraseña.", [{ text: "Aceptar" }]);

    RootNavigation.navigate("LoginScreen");
  } catch (error) {
    throw new Error(error.message);
  }
});
