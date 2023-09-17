export default function useValidationPost(
  login: string | null,
  password: string | number | null
): { result: boolean; error: string | null } {
  const isInvalidLogin = !login || login.length > 20;
  const isInvalidPassword = !password || password.toString().length > 20;

  return {
    result: !(isInvalidLogin || isInvalidPassword),
    error: isInvalidLogin
      ? "Логин имеет символов больше чем 20 или пуст"
      : isInvalidPassword
      ? "Пароль имеет символов больше чем 20 или пуст"
      : null,
  };
}
