import useValidationPost from "./validationForms";
import { ToastServiceMethods } from "primevue/toastservice";

const showToastMessage = (
  login: string | null,
  password: string | number | null,
  toast: ToastServiceMethods
): void => {
  const validResult = useValidationPost(login, password);

  if (validResult.result) {
    toast.add({
      severity: "success",
      summary: "Все прошло успешно",
      detail: "Данные отправлены",
      life: 3000,
    });
  } else {
    toast.add({
      severity: "error",
      summary: "Ошибка",
      detail: validResult.error,
      life: 3000,
    });
  }
};

export default showToastMessage;
