import React from "react";
import { useNavigate } from "react-router-dom";
import { forgotPasswordValidationSchema } from "../schemas";
import { postForgotPassword } from "../api/apiService";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  forgotPasswordFailure,
  forgotPasswordStart,
  forgotPasswordSuccess,
} from "../features/forgotPassword/forgotPasswordSlice";
import { toast, Flip } from "react-toastify";
import { successToast, errorToast } from "../services/toastService";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormValues = {
    email: "",
  };

  const handleForgotPasswordSubmit = async (values, action) => {
    dispatch(forgotPasswordStart());
    try {
      const response = (await postForgotPassword(values)).data;
      dispatch(forgotPasswordSuccess(response));
      action.resetForm();
    } catch (error) {
      dispatch(forgotPasswordFailure());
      errorToast(error?.response?.data?.msg);
      console.log({ error });
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFormValues,
      validationSchema: forgotPasswordValidationSchema,
      onSubmit: handleForgotPasswordSubmit,
    });

  return (
    <div className="forgot_page">
      <div className="forgot_div">
        <div className="forgot_form">
          <p className="forgot_title">Forgot Password</p>
          <p className="login_title_description">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <label className="form_label" htmlFor="email">
              Email address*
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
            <button className="forgot-button" type="submit">
              Send link
            </button>
            <h6 className="back_to_login" onClick={() => navigate("/login")}>
              Back to Login
            </h6>
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

export default ForgotPassword;
