import { typeLogin, typePassword } from "@/types/TypeFormsInput";
import { typeValidFormOject } from "@/types/TypeValidFormOject";

export default function useValidationPost(
  login: typeLogin,
  password: typePassword
): typeValidFormOject {
  const isInvalidLogin = !login || login.length > 20;
  const isInvalidPassword = !password || password.toString().length > 20;

  return {
    result: !(isInvalidLogin || isInvalidPassword),
    error: isInvalidLogin
      ? {
          text: "Логин имеет символов больше чем 20 или пуст",
          at: "login",
        }
      : isInvalidPassword
      ? {
          text: "Пароль имеет символов больше чем 20 или пуст",
          at: "password",
        }
      : null,
  };
}
