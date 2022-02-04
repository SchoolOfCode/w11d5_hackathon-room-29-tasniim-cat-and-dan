import { secretLanguage } from "./task1.js";

//👉 Write your tests below here:

describe(`secret sentence`, () => {
  test("checking your new sentence", () => {
    //arrange
    const sentence = "Hello there ! 5";
    const expected = "ello here ! 5";
    //act
    const actual = secretLanguage(sentence);
    //assert
    expect(actual).toBe(expected);
  });
});

describe(`secret sentence`, () => {
  test("checking your new sentence", () => {
    //arrange
    const sentence = "You need to isolate";
    const expected = "ou eed o solate";
    //act
    const actual = secretLanguage(sentence);
    //assert
    expect(actual).toBe(expected);
  });
});

//test(``)
