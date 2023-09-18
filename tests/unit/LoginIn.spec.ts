import { expect } from "chai";

function ValidationText(inputText: string): boolean {
  const isInvalidInputText = !inputText || inputText.toString().length > 20;

  return !isInvalidInputText;
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

function makeLogin() {
  let text = ``;

  for (let i = 0; i < 20; i++) {
    text += `${String.fromCodePoint(
      Math.floor(Math.random() * (220 - 20) + 50)
    )}`;
  }
  return text;
}

describe("check form password", () => {
  it("Get password and checking it", () => {
    for (let i = 0; i < 500; i++) {
      expect(ValidationText(makePassword())).equal(true);
    }
  });
});

describe("check form login", () => {
  it("Get login and checking it", () => {
    for (let i = 0; i < 500; i++) {
      expect(ValidationText(makeLogin())).equal(true);
    }
  });
});
