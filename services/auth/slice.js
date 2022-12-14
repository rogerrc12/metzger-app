import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isSignedIn: false,
    isProcessing: false,
    user: null,
  },
  extraReducers: {
    [actions.loginUser.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.loginUser.fulfilled]: (state, action) => {
      state.isProcessing = false;
      state.isSignedIn = true;
      state.user = action.payload;
    },
    [actions.loginUser.rejected]: (state) => {
      state.isProcessing = false;
      state.isLoading = false;
      state.isSignedIn = false;
    },
    [actions.loadSession.pending]: (state) => {
      state.isLoading = true;
    },
    [actions.loadSession.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSignedIn = true;
      state.user = action.payload;
    },
    [actions.loadSession.rejected]: (state) => {
      state.isLoading = false;
    },
    [actions.recoverPassword.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.recoverPassword.fulfilled]: (state) => {
      state.isProcessing = false;
    },
    [actions.recoverPassword.rejected]: (state) => {
      state.isProcessing = false;
    },
    [actions.verifyCode.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.verifyCode.fulfilled]: (state) => {
      state.isProcessing = false;
    },
    [actions.verifyCode.rejected]: (state) => {
      state.isProcessing = false;
    },
    [actions.resetPassword.pending]: (state) => {
      state.isProcessing = true;
    },
    [actions.resetPassword.fulfilled]: (state) => {
      state.isProcessing = false;
    },
    [actions.resetPassword.rejected]: (state) => {
      state.isProcessing = false;
    },
    [actions.logoutUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.isSignedIn = false;
      state.isProcessing = false;
      state.user = null;
    },
    [actions.logoutUser.rejected]: (state) => {
      state.isLoading = false;
      state.isSignedIn = false;
      state.isProcessing = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
