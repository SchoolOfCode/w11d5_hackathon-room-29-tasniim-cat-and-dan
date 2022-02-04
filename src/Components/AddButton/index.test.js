import { render, screen } from "@testing-library/react";
import AddButton from "./index";

const test = { handleClick: jest.fn() };
it("check if component comntains button element with the text Add 1", async () => {
  //first we render the component
  render(<AddButton {...test} />);

  //check if the button exist
  //test by role
  //e.g button,h1

  const firstButton = screen.getByRole("button", { name: "Add 1" });

  expect(firstButton).toBeInTheDocument();
});

// it("check if button render", async()=> {
//     //first we render the component
//     render (<AddButton/>);

//     //check if the button exist
//     //test by role
//     //e.g button,h1

//     const first = screen.getByText("hello")

//     expect(first).toBeInTheDocument();
// })
