import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/Store/index.ts";

interface Props {
  component: React.ReactNode;
}

const NoAuthRoute = (props: Props) => {
  const isLoggedIn = useAppSelector((state) => state.Auth.isLoggedIn);

  if (!isLoggedIn) {
    return <>{props.component}</>;
  }

  return <Navigate to="/dashboard" />;
};

export default NoAuthRoute;
