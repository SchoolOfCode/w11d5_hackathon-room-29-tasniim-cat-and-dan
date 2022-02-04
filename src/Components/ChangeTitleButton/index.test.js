import { render, screen } from "@testing-library/react";
import ChangeTitleButton from "./index";

it("check if component comntains button element with the text Change Title!", async () => {
  //first we render the component
  render(<ChangeTitleButton />);

  //check if the button exist
  //test by role
  //e.g button,h1

  const firstButton = screen.getByRole("button", { name: "Change Title!" });

  expect(firstButton).toBeInTheDocument();
});
