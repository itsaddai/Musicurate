import React from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthRouteGuard = ({ element }) => {
    // Check if user is logged in
      const [cookies] = useCookies([]);
      const isLoggedIn = !!cookies.token;

  // If the user logged in, redirect them to dashboard
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return element;
};

export default AuthRouteGuard;
