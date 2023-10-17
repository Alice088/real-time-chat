import { DirectiveBinding } from "vue";

export const vTimerIf = {
  mounted: (el: HTMLElement, binding: DirectiveBinding): void => {
    binding.value.flag
      ? setTimeout(() => (el.style.display = `block`), binding.value.time)
      : (el.style.display = `none`);
  },

  updated: (el: HTMLElement, binding: DirectiveBinding): void => {
    binding.value.flag
      ? setTimeout(() => (el.style.display = `block`), binding.value.time)
      : (el.style.display = `none`);
  },
};
