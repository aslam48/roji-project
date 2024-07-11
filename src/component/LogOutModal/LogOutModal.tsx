import React from "react";

interface LogOutModalProps {
  isOpen: boolean;
  onLogout: () => void;
}

const LogOutModal: React.FC<LogOutModalProps> = ({ isOpen, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-md w-full max-w-[480px] p-6 md:p-8 relative overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold">Session Expired</h2>
        </div>
        <p className="text-sm md:text-base mb-4">
          Your session has expired. Please log in again to continue.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
