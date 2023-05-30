import React from "react";

function ValidationError({ errorMsg, inputTouched }) {
  return (
    <>
      {errorMsg && inputTouched && <div className="form-error">{errorMsg}</div>}
    </>
  );
}

export default ValidationError;
