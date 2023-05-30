import * as api from "./apiHelper";

export const postLogin = async (params) => {
  const postLoginResponse = await api.post("/user/login", params);
  return postLoginResponse;
};

export const postForgotPassword = async (params) => {
  const postForgotPasswordResponse = await api.post(
    "/user/forgetpassword",
    params
  );
  return postForgotPasswordResponse;
};
