import SOCfinalGrade from "./main.js";


test("Given a project score, and a daily test score, SOCfinalGrade function returns the correct final grade based on these criteria", () => {
    //arrange
let project = 100;
let dailytests = 48;
let expected = "A - You're getting hired";
    
//act 
let actual = SOCfinalGrade(project, dailytests);

    //assert
    expect(actual).toBe(expected);
});