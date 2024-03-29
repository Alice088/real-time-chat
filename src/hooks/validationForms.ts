import { typeInput } from "@/types/TypeFormsInput";
import { typeValidFormOject } from "@/types/TypeValidFormOject";

function validation(inputValue: typeInput, name: string) {
  return !inputValue
    ? { result: false, message: "Поле пустое", at: name }
    : inputValue.length > 20
    ? { result: false, message: "Символов больше 20", at: name }
    : inputValue.length < 10
    ? { result: false, message: "Символов меньше 10", at: name }
    : { result: true, message: null, at: name };
}

function useValidationForm(
  login: typeInput,
  password: typeInput
): typeValidFormOject {
  const isInvalidLogin = validation(login, `login`);
  const isInvalidPassword = validation(password, `password`);

  return {
    result: isInvalidLogin.result && isInvalidPassword.result,
    error: !isInvalidLogin.result
      ? {
          text: isInvalidLogin.message,
          at: isInvalidLogin.at,
        }
      : !isInvalidPassword.result
      ? {
          text: isInvalidPassword.message,
          at: isInvalidPassword.at,
        }
      : null,
  };
}

export { validation, useValidationForm };
