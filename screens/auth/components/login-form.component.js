import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/UI/button.component";
import { Input } from "../../../components/UI/input.component";
import { loginUser } from "../../../services/auth/actions";
import { loginSchema } from "../validation/schemas";

const LoginForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch(),
    isProcessing = useSelector((state) => state.auth.isProcessing),
    formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => dispatch(loginUser(values)),
    });

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Input
        placeholder="Correo electrónico"
        errorMessage={formik.touched.username && formik.errors.username}
        isError={formik.touched.username && formik.errors.username}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      <Input
        placeholder="Contraseña"
        onChangeText={formik.handleChange("password")}
        rightIcon={
          <MaterialCommunityIcons name={hidePassword ? "eye" : "eye-off"} color="#999" size={25} onPress={() => setHidePassword((prev) => !prev)} style={{ marginRight: 10 }} />
        }
        secureTextEntry={hidePassword}
      />
      <Button title="Iniciar sesión" loading={isProcessing} disabled={!formik.isValid} onPress={formik.handleSubmit} />
    </View>
  );
};

export default LoginForm;
