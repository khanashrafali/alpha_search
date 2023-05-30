import React, { useState } from "react";
import { useFormik } from "formik";
import {
  forgotPasswordValidationSchema,
  loginValidationSchema,
} from "../schemas";
import { postLogin } from "../api/apiService";
import jwtDecode from "jwt-decode";
import { toast, Flip } from "react-toastify";
import { errorToast, successToast } from "../services/toastService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  loginSuccess,
  loginUser,
  loggedInUser,
  loginFailure,
} from "../features/login/loginSlice";
import InputField from "../shared/InputField";
import { emailProps, passwordProps } from "../shared/CONSTANT";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberme, setRememberme] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberme = (e) => {
    setRememberme(e.target.checked);
  };

  const initialFormValues = {
    email: "",
    password: "",
  };

  // const handleLoginSubmit = async (values, action) => {
  //   dispatch(login());
  //   try {
  //     const loggedIn = (await postLogin(values)).data;
  //     const decodedData = jwtDecode(loggedIn.access_token);
  //     localStorage.setItem("user", JSON.stringify(decodedData));
  //     localStorage.setItem("token", JSON.stringify(loggedIn.access_token));
  //     localStorage.setItem("EXPIRED_AT", decodedData.expiry);
  //     if (rememberme) localStorage.setItem("rememberme", rememberme);
  //     action.resetForm();
  //     toast(loggedIn?.message || "User logged In Successfully.", {
  //       type: toast.TYPE.SUCCESS,
  //       autoClose: 5000,
  //       transition: Flip,
  //     });
  //     navigate("/");
  //   } catch (error) {
  //     console.log("error==>", error);
  //     toast(
  //       error?.response?.data?.message || "Email and Password is Invalid.",
  //       {
  //         type: toast.TYPE.ERROR,
  //         autoClose: 5000,
  //         transition: Flip,
  //       }
  //     );
  //   }
  // };

  const handleLoginSubmit = async (values, action) => {
    dispatch(login());
    try {
      const loggedIn = (await postLogin(values)).data;
      dispatch(loginSuccess(loggedIn));
      successToast(loggedIn?.message || "User logged In Successfully.");
      const decodedData = jwtDecode(loggedIn.access_token);
      localStorage.setItem("user", JSON.stringify(decodedData));
      localStorage.setItem("token", JSON.stringify(loggedIn.access_token));
      localStorage.setItem("EXPIRED_AT", decodedData.expiry);
      if (rememberme) localStorage.setItem("rememberme", rememberme);
      action.resetForm();
      // toast(loggedIn?.message || "User logged In Successfully.", {
      //   type: toast.TYPE.SUCCESS,
      //   autoClose: 5000,
      //   transition: Flip,
      // });
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      dispatch(loginFailure());
      errorToast(
        error?.response?.data?.message || "Email and Password is Invalid."
      );
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFormValues,
      validationSchema: loginValidationSchema,
      onSubmit: handleLoginSubmit,
    });

  const inputs = [
    {
      ...emailProps,
      isDivRequired: false,
    },
    {
      ...passwordProps,
      isDivRequired: true,
      buttonOnClick: handleTogglePassword,
      isShowButton: true,
      showPassword: showPassword,
    },
  ];

  const customInput = inputs.map((input) => (
    <InputField
      key={input?.name}
      label={input?.label}
      name={input?.name}
      labelClassName="form_label"
      type={input?.type}
      value={values[input?.name]}
      placeholder={input?.placeholder}
      autoComplete={input?.autoComplete}
      onChange={handleChange}
      onBlur={handleBlur}
      isDivRequired={input?.isDivRequired}
      divClassName={input?.divClassName}
      buttonClassName={input?.buttonClassName}
      buttonOnClick={input?.buttonOnClick}
      errorMsg={errors[input.name]}
      inputTouched={touched[input.name]}
      isShowButton={input?.isShowButton}
      showPassword={input?.showPassword}
    />
  ));

  return (
    <div className="login_page">
      <div className="login_div">
        <div className="login_form">
          <p className="login_title">Welcome Back!</p>
          <p className="login_title_description">
            Welcome back! Please login in to access your <br /> account.
          </p>
          <form onSubmit={handleSubmit}>
            {customInput}
            {/* <label className="form_label" htmlFor="email">
              Email Address*
            </label>
            <input
              type="email"
              autoComplete="off"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className="form-error">{errors.email}</div>
            )}

            <label className="form_label" htmlFor="password">
              Password
            </label>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="off"
                name="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <button
                className="toggle_button"
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && touched.password && (
              <div className="form-error">{errors.password}</div>
            )} */}
            <div className="wrap_forgot_password">
              <div className="remember">
                <label htmlFor="rememberme">
                  <input
                    type="checkbox"
                    id="rememberme"
                    name="rememberme"
                    checked={rememberme}
                    onChange={(e) => handleRememberme(e)}
                  />
                  Remember Me
                </label>
              </div>
              <div className="forgot">
                <a onClick={() => navigate("/password/forgot")}>
                  Forgot password?
                </a>
              </div>
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="alpha_search" style={{ position: "relative" }}>
        <div className="alpha_search_content">
          <div>
            <img
              className="alpha_search_image"
              src="/ALphaSearch_White 1.png"
            />
            <h6 className="alpha_search_title">
              Using Data to bring{" "}
              <span style={{ color: "rgba(250, 255, 20)" }}>Transparency</span>{" "}
              <br /> to the private markets.
            </h6>
            <img
              className="alpha_search_content_image"
              src="/Group 72839.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
