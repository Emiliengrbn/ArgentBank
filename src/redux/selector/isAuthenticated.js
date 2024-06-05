export function isAuthenticated(state) {
  return !!state.Login.token;
}
