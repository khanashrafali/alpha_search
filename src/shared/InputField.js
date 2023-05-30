import React from "react";
import ValidationError from "./ValidationError";

const InputField = ({
  label,
  name,
  type,
  labelClassName,
  inputClassName,
  isDivRequired,
  isShowButton,
  showPassword,
  divClassName,
  buttonClassName,
  buttonOnClick,
  errorMsg,
  inputTouched,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      {isDivRequired ? (
        <div className={divClassName}>
          <input
            id={name}
            type={type === "password" && showPassword ? "text" : type}
            name={name}
            {...props}
          />
          {isShowButton && (
            <button
              className={buttonClassName}
              type="button"
              onClick={buttonOnClick}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>
      ) : (
        <input id={name} type={type} name={name} {...props} />
      )}
      <ValidationError errorMsg={errorMsg} inputTouched={inputTouched} />
    </>
  );
};

export default InputField;
