import "./Input.css";
import { forwardRef } from "react";

const TextArea = forwardRef(
  ({ style, label, error, className, ...props }, ref) => {
    const errorVisible = error
      ? { visibility: "visible" }
      : { visibility: "hidden" };
    return (
      <>
        {label && <label>{label}</label>}

        <textarea
          style={style}
          className={`w-full px-3 py-2 border-none rounded-md text-base resize-none
                      focus:outline-none focus:ring-0 focus:border-transparent
                    ${className || ""}`}  
          rows={7}
          ref={ref}
          {...props}
        />

        {error && <div className="error-message">{error} </div>}
      </>
    );
  },
);

export default TextArea;
