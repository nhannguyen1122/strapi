import React, { createContext, useState } from "react";
import { AuthenticationService } from "../../services/auth.service";
import { IAuth, User } from "./auth.interface";

export const AuthContext = createContext<IAuth>({
  user: null,
});

export default function AuthComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const authenService = new AuthenticationService();

  const signIn = (user: User) => {
    return authenService.signIn(() => {
      setUser(user);
    });
  };

  const signOut = (user: User) => {
    return authenService.signOut(() => {
      setUser(null);
    });
  };

  const value = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
