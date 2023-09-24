import { expect } from "chai";

function ValidationText(inputText: string): boolean {
  // eslint-disable-next-line prettier/prettier
  const isInvalidLogin = inputText && !(inputText.toString().length > 20) && !(inputText.toString().length < 10) || false;

  return isInvalidLogin;
}

function makePassword() {
  let text = ``;

  for (let i = 0; i < 2; i++) {
    text += `${String.fromCodePoint(
      Math.floor(Math.random() * (220 - 20) + 50)
    )}`;

    text += `${Math.floor(Math.random() * (220 - 20) + 50)}`;
  }
  return text.slice(0, 20);
}

function makeLogin() {
  let text = ``;

  for (let i = 0; i < 2; i++) {
    text += `${String.fromCodePoint(
      Math.floor(Math.random() * (220 - 20) + 50)
    )}`;
  }
  return text;
}

describe("check form password", () => {
  it("Get password and checking it", () => {
    for (let i = 0; i < 500; i++) {
      expect(ValidationText(makePassword())).equal(false);
    }
  });
  after(() => console.log(`good`));
});

describe("check form login", () => {
  it("Get login and checking it", () => {
    for (let i = 0; i < 500; i++) {
      expect(ValidationText(makeLogin())).equal(false);
    }
  });
  after(() => console.log(`good`));
});
