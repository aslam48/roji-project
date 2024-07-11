import React from "react";

interface ToggleBtnProps {
  isToggled: boolean;
  toggle: () => void;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ isToggled, toggle }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="ml-6 text-[14px] text-[#2F2B43] font-[500]">
        {isToggled ? "On" : "Off"}
      </span>
      <button
        onClick={toggle}
        className={`w-12 h-6 rounded-full focus:outline-none transition-colors duration-300 ${
          isToggled ? "bg-baseColor" : "bg-gray-300"
        }`}
      >
        <span
          className={`block w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${
            isToggled ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleBtn;
