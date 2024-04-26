import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-md w-4/5 flex flex-row gap-3 items-center hover:bg-gray-600 hover:text-white text-slate-300 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
