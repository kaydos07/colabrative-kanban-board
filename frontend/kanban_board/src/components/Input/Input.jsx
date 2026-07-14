import "./Input.css";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ style, label, type = "text", error, className, ...props }, ref) => {
    const errorVisible = error
      ? { visibility: "visible" }
      : { visibility: "hidden" };
    return (
      <>
        {label && <label>{label}</label>}

        <input
          style={style}
          className={`input-form ${className || ""}`}
          type={type}
          ref={ref}
          {...props}
        />

        {error && <div className="error-message">{error} </div>}
      </>
    );
  },
);

export default Input;
