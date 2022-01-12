import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MenuPage from "../../../pages/MenuPage";

test("Clicking 'edit items' button navigates to the edit page", () => {
  render(<MenuPage />);

  userEvent.click(screen.getByText("edit items"));

  expect(screen.getByText("done editing")).toBeVisible();
});

test("Adding letters to price input gives an error alert", () => {
  const alertMock = jest.spyOn(window, "alert");
  render(<MenuPage />);

  userEvent.click(screen.getByText("edit items"));

  // Inputs

  userEvent.type(screen.getByPlaceholderText("17"), "abc");

  // Assertions
  userEvent.click(screen.getByText("done editing"));
  expect(alertMock).toBeCalledTimes(1);
});

test("Multiple items can be edited in a single session", () => {
  render(<MenuPage />);

  userEvent.click(screen.getByText("edit items"));

  // Inputs
  userEvent.type(screen.getByPlaceholderText("salmon burger"), " edit");

  userEvent.type(screen.getByPlaceholderText("17"), "0");

  userEvent.type(screen.getByPlaceholderText("pastrami on rye"), " edit");

  userEvent.type(screen.getByPlaceholderText("16"), "0");

  // Assertions
  userEvent.click(screen.getByText("done editing"));

  expect(screen.getByText("salmon burger edit")).toBeVisible();
  expect(screen.getByText("170.00")).toBeVisible();

  expect(screen.getByText("pastrami on rye edit")).toBeVisible();
  expect(screen.getByText("160.00")).toBeVisible();
});
