import React from "react";

interface SubmitButtonProps {
  isLoading: boolean;
  isDisabled: boolean;
  label: string;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading,
  isDisabled,
  label,
  onClick
}) => {
  return (
    <button
      type="submit"
      className={`w-full bg-tertiaryColor text-white h-[44px] p-2 rounded-md ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? (
        <div
          className="spinner-border text-light flex justify-center items-center"
          role="status"
        >
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default SubmitButton;
