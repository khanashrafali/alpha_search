import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  forgotPasswordLoading: false,
  forgotPasswordSuccess: false,
};

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    forgotPasswordStart: (state) => {
      state.forgotPasswordLoading = true;
    },
    forgotPasswordSuccess: (state, action) => {
      state.data = action.payload;
      state.forgotPasswordLoading = false;
      state.forgotPasswordSuccess = true;
    },
    forgotPasswordFailure: (state) => {
      state.data = {};
      state.forgotPasswordLoading = false;
      state.forgotPasswordSuccess = false;
    },
  },
});

export const forgotPasswordData = (state) => state.forgotPassword;

export const {
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
