import React, { Suspense } from "react";

import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hooks";
import { AuthenticationService } from "../../services/auth.service";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const authService = new AuthenticationService();
  const authCheck = useAuth();
  const location = useLocation();

  const checkGuard = () => {
    const isAuthenticated = authService.isAuthenticated;

    if (!isAuthenticated || !authCheck?.user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
      //TODO: add jsx
      return <Suspense fallback={<div>Loading</div>}>{children}</Suspense>;
    }
  };

  return <React.Fragment>{checkGuard()}</React.Fragment>;
}

export default AuthGuard;
