export interface User {
  id: string;
  userName: string;
}

export interface IAuth {
  user: User | null;
  signIn?: <T>(user: User, cb: T) => void;
  signOut?: <T>(user: User, cb: T) => void;
}
