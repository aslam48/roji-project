import React from "react";
import PropTypes from "prop-types";

interface AuthSubmitBtnProps {
  label: string;
  onClick: () => void;
  isValid?: boolean;
  isLoading?: boolean;
}

const AuthSubmitBtn: React.FC<AuthSubmitBtnProps> = ({
  label,
  onClick,
  isValid,
  isLoading
}) => {
  const handleClick = () => {
    if (!isLoading) {
      onClick();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleClick}
        className={`w-full bg-secondaryColor rounded-lg flex items-center justify-center text-white py-2 ${
          !isValid
            ? "bg-[#5F9A3A] text-white opacity-40 font-semibold cursor-not-allowed"
            : "bg-[#5F9A3A] text-white font-semibold "
        }`}
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <div className="spinner-border text-light" role="status">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
          </div>
        ) : (
          label
        )}
      </button>
    </div>
  );
};

// Prop type validation
AuthSubmitBtn.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default AuthSubmitBtn;
