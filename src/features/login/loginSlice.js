import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "../../api/apiService";

const initialState = {
  data: {},
  isLoading: false,
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.data = {};
      state.isLoading = false;
      state.isLoggedIn = false;
    },
  },
});

export const loggedInUser = (state) => state.login;

export const { login, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;

// export const loginUser = async (values) => async (dispatch) => {
//   dispatch(login());
//   try {
//     console.log("dsfdsfdfds");
//     const loggedIn = (await postLogin(values)).data;
//     dispatch(loginSuccess(loggedIn));
//   } catch (error) {
//     console.log("error==>", error);
//   }
// };
