import React from "react";

interface DisableBlueButtonProps {
  onClick: () => void;
  text: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  isLoading?: boolean;
}

const DisableBlueButton: React.FC<DisableBlueButtonProps> = ({
  onClick,
  text,
  type,
  disabled,
  isLoading
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`w-full bg-baseColor rounded-lg flex items-center justify-center text-white py-2 ${
          isLoading
            ? "bg-[#5F9A3A] text-white cursor-not-allowed"
            : disabled
              ? "opacity-40 text-[#808080] cursor-not-allowed"
              : "bg-[#5F9A3A] text-white hover:bg-opacity-90"
        }`}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default DisableBlueButton;
