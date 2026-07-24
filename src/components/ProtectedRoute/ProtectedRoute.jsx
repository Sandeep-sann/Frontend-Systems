import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../helpers/auth";

const ProtectedRoute = () => {
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;