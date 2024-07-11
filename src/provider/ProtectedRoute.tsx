import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/Store/index.ts";
import { logout } from "../redux/Slices/auth.slice.ts";

interface Props {
  component: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.Auth.isLoggedIn);
  const userToken = localStorage.getItem("user_token");

  if (isLoggedIn && userToken) {
    return <>{props.component}</>;
  } else {
    dispatch(logout());
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
