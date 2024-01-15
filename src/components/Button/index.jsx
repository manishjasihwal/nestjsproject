import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-bl-[10px] rounded-br-none rounded-tl-[10px] rounded-tr-none",
};
const variants = {
  fill: {
    orange_800: "bg-orange-800 text-white-A700",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-1", sm: "p-2", md: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["orange_800", "white_A700"]),
};

export { Button };
