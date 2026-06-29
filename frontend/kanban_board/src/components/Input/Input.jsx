import "./Input.css";
import { forwardRef } from "react";

const Input = forwardRef(({ label, type = "text", error, ...props }, ref) => {
  const errorVisible = error
    ? { visibility: "visible" }
    : { visibility: "hidden" };
  return (
    <>
      {label && <label>{label}</label>}

      <input className="input-form" type={type} ref={ref} {...props} />

      {error ? (
        <div className="error-message">{error} </div>
      ) : (
        <div style={errorVisible} className="error-message">
          this is a invisible   error message
        </div>
      )}
    </>
  );
});

export default Input;
