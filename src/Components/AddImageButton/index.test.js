import { render, screen } from "@testing-library/react";
import AddImageButton from "./index";

it("check if component comntains button element with the text Add image", async () => {
  //first we render the component
  render(<AddImageButton />);

  //check if the button exist
  //test by role
  //e.g button,h1

  const addImageButton = screen.getByRole("button", { name: "Add image" });

  expect(addImageButton).toBeInTheDocument();
});
