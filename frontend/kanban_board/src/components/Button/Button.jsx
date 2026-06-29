import "./Button.css";

import { useState } from "react";
import clsx from "clsx";

export default function Button({
  children,
  color,
  handleClick,
  size,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const HandleClickAnimation = () => {
    setIsClicked((click) => !click);
  };

  const handleHoverAnimation = () => {
    setIsHovered((hover) => !hover);
    if (isClicked === true) setIsClicked((click) => !click);
  };

  const style = {
    "--theme-color": color,
    backgroundColor: isHovered
      ? "color-mix(in srgb, var(--theme-color) 93%, white)"
      : `${color}`,
    boxShadow: isHovered
      ? isClicked
        ? "0px 0px 0px #1a1c1c"
        : "3px 4px 0px #1a1c1c"
      : "2px 3px 0px #1a1c1c",
    transform: isClicked ? "translateY(2px)" : "translateY(0px)",
    transition:
      "background-color 0.2s ease-in-out, box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out",
  };

  return (
    <button
      onMouseEnter={handleHoverAnimation}
      onMouseLeave={handleHoverAnimation}
      onMouseDown={HandleClickAnimation}
      onMouseUp={HandleClickAnimation}
      style={style}
      onClick={handleClick}
      className={`${size}`}
      {...props}
    >
      {children}
    </button>
  );
}
