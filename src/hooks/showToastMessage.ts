import { useValidationForm } from "./validationForms";
import { ToastServiceMethods } from "primevue/toastservice";
import { typeInput } from "@/types/TypeFormsInput";
import { typeValidFormOject } from "@/types/TypeValidFormOject";

const showToastMessage = (
  login: typeInput,
  password: typeInput,
  toast: ToastServiceMethods
): typeValidFormOject => {
  let validResult;

  try {
    validResult = useValidationForm(login, password);

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
  } catch (error) {
    alert(
      `непредвиденная ошибка, тип: ${error.message}, пожалуйста не паникуйте`
    );
    throw error;
  }
  return validResult;
};

export default showToastMessage;
