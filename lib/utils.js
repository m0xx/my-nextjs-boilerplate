import React from "react";
import cn from "classnames";

function createEl(el, classes, extras = {}) {
  return function Wrapped({ className, children, ...rest }) {
    return React.createElement(el, {
      ...rest,
      ...extras,
      className: cn(classes, className),
      children,
    });
  };
}

export { createEl };
