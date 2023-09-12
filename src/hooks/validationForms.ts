export default function useValidationPost(
  login: string | null,
  password: string | number | null
): boolean {
  if (login && password) {
    if (login.length < 20 && password.toString().length < 20) {
      return true;
    }
  }
  return false;
}
