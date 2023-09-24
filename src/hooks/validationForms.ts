import { typeLogin, typePassword } from "@/types/TypeFormsInput";
import { typeValidFormOject } from "@/types/TypeValidFormOject";

export default function useValidationPost(
  login: typeLogin,
  password: typePassword
): typeValidFormOject {
  // eslint-disable-next-line prettier/prettier
  const isInvalidLogin = login && !(login.length > 20) && !(login.length < 10) || false;
  // eslint-disable-next-line prettier/prettier
  const isInvalidPassword = password && !(password.toString().length > 20) && !(password.toString().length < 10) || false;

  return {
    result: isInvalidLogin && isInvalidPassword,
    error: !isInvalidLogin
      ? {
          text: "Логин имеет символов больше чем 20 или пуст",
          at: "login",
        }
      : !isInvalidPassword
      ? {
          text: "Пароль имеет символов больше чем 20 или пуст",
          at: "password",
        }
      : null,
  };
}
