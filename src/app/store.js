import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import forgotPasswordReducer from "../features/forgotPassword/forgotPasswordSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});

export default store;
