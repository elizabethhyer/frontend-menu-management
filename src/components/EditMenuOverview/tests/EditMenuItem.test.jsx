import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuPage from "../../../pages/MenuPage";
import MemoryRouter from "react-router-dom";

test("Clicking 'edit items' button navigates to the edit page", () => {
  render(
    <MemoryRouter>
      <MenuPage />{" "}
    </MemoryRouter>
  );
  userEvent.click(screen.getByText("edit items"));
  expect(screen.getByText("done editing")).toBeVisible();
});

test("Edit item form does not accept edits that exclude a title or price", () => {
  const alertMock = jest.spyOn(window, "alert");
  render(
    <MemoryRouter>
      <MenuPage />{" "}
    </MemoryRouter>
  );
  // Inputs
  userEvent.type(screen.getByLabelText("Image:"), "img.png");
  userEvent.type(screen.getByLabelText("* Title:"), "");
  userEvent.type(screen.getByLabelText("* Price:"), "10");
  userEvent.type(
    screen.getByLabelText("Description:"),
    "The description to end all descriptions"
  );

  // Assertions
  userEvent.click(screen.getByText("Add item"));
  expect(alertMock).toBeCalledTimes(1);

  // Inputs
  userEvent.type(screen.getByLabelText("* Title:"), "New Title");
  userEvent.type(screen.getByLabelText("* Price:"), "");

  // Assertions
  userEvent.click(screen.getByText("done editing"));
  expect(alertMock).toBeCalledTimes(1);
});

test("Multiple items can be edited in a single session", () => {});

test("Edits are displayed after navigating back to home screen", () => {});
