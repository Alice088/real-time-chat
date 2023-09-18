import { expect } from "chai";
// import { shallowMount } from "@vue/test-utils";

function ValidationPassword(password) {
  const isInvalidPassword = !password || password.toString().length > 20;

  return !isInvalidPassword;
}

function makeLogin() {
  let text = ``;

  for (let i = 0; i < 20; i++) {
    text += `${String.fromCodePoint(
      Math.floor(Math.random() * (220 - 20) + 50)
    )}`;
  }
  return text;
}

function makePassword() {
  let text = ``;

  for (let i = 0; i < 20; i++) {
    text += `${String.fromCodePoint(
      Math.floor(Math.random() * (220 - 20) + 50)
    )}`;

    text += `${Math.floor(Math.random() * (220 - 20) + 50)}`;
  }
  return text.slice(0, 20);
}

describe("DialogLoginIn.vue", () => {
  it("Get password and cheking it", () => {
    expect(ValidationPassword(makePassword())).equal(true);
  });
});

// describe("DialogLoginIn.vue", () => {
//   it("Get login and cheking it", () => {
//     const wrapper = shallowMount(LoginIn);
//     wrapper.find("button").trigger("click");
//     expect(wrapper.find("div").text()).contains("1");
//   });
// });
