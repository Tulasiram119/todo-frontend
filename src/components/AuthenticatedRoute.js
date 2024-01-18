import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../utils/Context";

const AuthenticatedRoute = ({ children }) => {
  const { authenticated } = useAppContext();
  return authenticated ? children : <Navigate to="/login" />;
};

export default AuthenticatedRoute;
