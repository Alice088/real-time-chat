import { useValidationForm } from "./validationForms";
import { ToastServiceMethods } from "primevue/toastservice";
import { typeInput } from "@/types/TypeFormsInput";
import { typeValidFormOject } from "@/types/TypeValidFormOject";

const showToastMessage = (
  login: typeInput,
  password: typeInput,
  toast: ToastServiceMethods
): typeValidFormOject => {
  const validResult = useValidationForm(login, password);

  validResult.result
    ? toast.add({
        severity: "success",
        summary: "Все прошло успешно",
        detail: "Данные отправлены",
        life: 3000,
      })
    : toast.add({
        severity: "error",
        summary: "Ошибка",
        detail: validResult.error.text,
        life: 3000,
      });
  return validResult;
};

export default showToastMessage;
