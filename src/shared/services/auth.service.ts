export class AuthenticationService {
  isAuthenticated = false;

  signIn(cb: VoidFunction) {
    this.isAuthenticated = true;
    return setTimeout(cb, 1000);
  }

  signOut(cb: VoidFunction) {
    this.isAuthenticated = false;
    return setTimeout(cb, 1000);
  }
}
