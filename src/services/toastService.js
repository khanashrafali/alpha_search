import React from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (message) => {
  toast.success(message);
};

export const errorToast = (message) => {
  toast.error(message);
};

export const infoToast = (message) => {
  toast.info(message);
};

export const warnToast = (message) => {
  toast.warn(message);
};
