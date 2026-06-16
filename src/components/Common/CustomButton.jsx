import React from "react";

const CustomButton = ({ text, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className= "relative overflow-hidden rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-2 text-[15px] font-semibold text-white shadow-md transition hover:scale-105 duration-300"
    >
      {icon}
      {text}
    </button>
  );
};

export default CustomButton;