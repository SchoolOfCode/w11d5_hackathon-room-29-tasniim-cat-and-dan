import { createUsername } from "./task2.js";

//👉 Write your tests below here:

const usernameChecker = [
  ["Dan", "martin", 23],
  ["williams", "GoDwIN", 30],
  ["Johnny", "RYan-SMITh", 45],
  ["Johnny", "Bobinson", 49],
  ["Harry", "potter", 46],
  ["Billy", "Davies", 34],
  ["Chris", "meah", 32],
  ["LIZ", "K", 67],
  ["Alan", "PetersON", 76],
  ["Alex", "Michaels", 26],
  ["Kazeem", "Alatishe", 5],
];

describe(`Username Function for Kata`, function () {
  test.each(usernameChecker)(
    `When you input %s, %s, %i it should give the correct username format`,
    function (firstname, surname, age) {
      const actual = createUsername(firstname, surname, age);
      const expected =
        String(firstname[0].toLowerCase()) +
        String(surname.toUpperCase()) +
        Number(age);
      expect(actual).toStrictEqual(expected);
    }
  );
});

test("GIven a name and it shouod return a greeting", () => {
  //Arrange
  const name = "Dan";
  const expected = "Hello, my name is Dan";
  const actual = introduction(name);

  expect(actual).toBe(expected);
});
