import React, { useEffect, useRef } from "react";

function Button({ children, ripple, className, onClick, variant, ...props }) {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.addEventListener(
      "click",
      function ({ pageX, pageY, currentTarget }) {
        const x =
          ((pageX - currentTarget.offsetLeft) * 100) /
          currentTarget.offsetWidth;
        const y =
          ((pageY - currentTarget.offsetTop) * 100) /
          currentTarget.offsetHeight;

        const ripple = document.createElement("span");
        const rippleColor =
          buttonRef.current.getAttribute("data-ripple") || "#212129";
        ripple.classList.add("ripple-effect");
        ripple.style.background = rippleColor;
        buttonRef.current.appendChild(ripple);
        ripple.style.left = x + "%";
        ripple.style.top = y + "%";
        setTimeout(() => {
          ripple.remove();
        }, 700);
      }
    );
  }, []);

  return (
    <button
      {...props}
      className={`btn btn-ripple variant-${variant || "contained"} ${
        className || ""
      }`}
      onClick={onClick}
      data-ripple={ripple}
      ref={buttonRef}
    >
      {children}
    </button>
  );
}

export default Button;
