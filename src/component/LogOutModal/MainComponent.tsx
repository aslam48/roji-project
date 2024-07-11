import React, { useState, useEffect } from "react";
import { setModalHandler } from "../../utils/axiosConfig/axiosConfig";
import LogOutModal from "./LogOutModal";

const MainComponent: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setModalHandler(setModalOpen);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    window.location.href = "/";
  };

  return (
    <div>
      {/* Your existing code */}
      <LogOutModal isOpen={isModalOpen} onLogout={handleLogout} />
    </div>
  );
};

export default MainComponent;
