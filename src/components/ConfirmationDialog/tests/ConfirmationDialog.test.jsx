import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuPage from "../../../pages/MenuPage";
import MemoryRouter from "react-router-dom";

test("Clicking the delete icon opens the confirmation dialog", () => {
  render(
    <MemoryRouter>
      <MenuPage />
    </MemoryRouter>
  );

  // Action
  const firstDeleteIcon = screen.getAllByTestId("DeleteIcon")[0];
  userEvent.click(firstDeleteIcon);

  // Assertion
  const dialogText = screen.getByText(
    "Are you sure you would like to delete this item?"
  );
  expect(dialogText).toBeVisible();
});

test("Canceling out of confirmation dialog does not delete item", () => {
  render(
    <MemoryRouter>
      <MenuPage />
    </MemoryRouter>
  );
  // Action
  const firstDeleteIcon = screen.getAllByTestId("DeleteIcon")[0];
  userEvent.click(firstDeleteIcon);

  // Assertion
  userEvent.click(screen.getByText("cancel"));
  expect(screen.getByText("cheeseburger")).toBeVisible();
});

test("User can re-enter confirmation dialog after a cancellation", () => {
  render(
    <MemoryRouter>
      <MenuPage />
    </MemoryRouter>
  );
  // Action
  const firstDeleteIcon = screen.getAllByTestId("DeleteIcon")[0];
  userEvent.click(firstDeleteIcon);

  // Assertion
  userEvent.click(screen.getByText("cancel"));

  // Action
  userEvent.click(firstDeleteIcon);
  userEvent.click(firstDeleteIcon); // Find out why after a cancel I have to click twice to get back in

  // Assertion
  const dialogText = screen.getByText(
    "Are you sure you would like to delete this item?"
  );
  expect(dialogText).toBeVisible();
});

test("Item is deleted if user confirms deletion", () => {
  render(
    <MemoryRouter>
      <MenuPage />
    </MemoryRouter>
  );
  // Action
  const firstDeleteIcon = screen.getAllByTestId("DeleteIcon")[0];
  userEvent.click(firstDeleteIcon);

  // Assertion
  userEvent.click(screen.getByText("delete"));
  expect(screen.queryByText("cheeseburger")).toBeNull();
});
