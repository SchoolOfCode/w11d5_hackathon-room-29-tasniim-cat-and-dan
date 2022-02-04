import { render, screen } from "@testing-library/react";
import ChangeTitleButton from "./index";

const test = { handleClick: jest.fn() }; 
it("check if component comntains button element with the text Change Title!", async () => {
  //first we render the component
  render(<ChangeTitleButton {...test}/>);

  //check if the button exist
  //test by role
  //e.g button,h1

  const title = screen.getByRole("button", { name: "Change Title!" });

  expect(title).toBeInTheDocument();
});
