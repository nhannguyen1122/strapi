import React from "react";
import { AuthContext } from "../components/auth/AuthWrapper.component";

export function useAuth() {
  return React.useContext(AuthContext);
}
