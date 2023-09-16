/* eslint-disable prettier/prettier */
export default function useValidationPost(
  login: string | null,
  password: string | number | null
): { result: boolean; error: string | null } {
  
  if (!login || login.length > 20) {
    return { result: false, error: `Логин имеет символов больше чем 20 или пуст` };
  }
  else if (!password || password.toString().length > 20) {
    return { result: false, error: `Пароль имеет символов больше чем 20 или пуст` };
  } 
  else {
    return { result: true, error: null };
  }

}
