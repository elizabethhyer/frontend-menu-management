import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuPage from "../../../pages/MenuPage";

test("Add item form does not accept price as non-numerical value", () => {
  const alertMock = jest.spyOn(window, "alert");
  render(<MenuPage />);

  // Inputs
  userEvent.type(screen.getByLabelText("Image:"), "img.png");
  userEvent.type(screen.getByLabelText("* Title:"), "A Brand New Item!");
  userEvent.type(
    screen.getByLabelText("* Price:"),
    "Most certainly NOT a number"
  );
  userEvent.type(
    screen.getByLabelText("Description:"),
    "The description to end all descriptions"
  );

  //Assertions
  userEvent.click(screen.getByText("Add item"));
  expect(alertMock).toBeCalledTimes(1);
});

test("Add item form does not accept new item if there is not a price and title", () => {
  const alertMock = jest.spyOn(window, "alert");
  render(<MenuPage />);

  // Inputs
  userEvent.type(screen.getByLabelText("Image:"), "img.png");
  userEvent.type(screen.getByLabelText("* Title:"), "");
  userEvent.type(screen.getByLabelText("* Price:"), "10");
  userEvent.type(
    screen.getByLabelText("Description:"),
    "The description to end all descriptions"
  );

  //Assertions
  userEvent.click(screen.getByText("Add item"));
  expect(alertMock).toBeCalledTimes(1);
});

test("Add item form adds item to the DOM if all criteria is met", () => {
  const alertMock = jest.spyOn(window, "alert");
  render(<MenuPage />);

  // Inputs
  userEvent.type(screen.getByLabelText("Image:"), "img.png");
  userEvent.type(screen.getByLabelText("* Title:"), "Another new Item!!!!!");
  userEvent.type(screen.getByLabelText("* Price:"), "10");
  userEvent.type(
    screen.getByLabelText("Description:"),
    "The description to end all descriptions"
  );

  //Assertions
  userEvent.click(screen.getByText("Add item"));
  expect(alertMock).toBeCalledTimes(0);

  const newItem = screen.getByText("Another new Item!!!!!");
  expect(newItem).toBeVisible();
});
