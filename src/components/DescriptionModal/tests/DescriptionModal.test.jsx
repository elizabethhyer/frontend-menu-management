import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuPage from "../../../pages/MenuPage";
import MemoryRouter from "react-router-dom";

test("Description modal opens if a user clicks on an item photo", () => {
  render(
    <MemoryRouter>
      <MenuPage />
    </MemoryRouter>
  );
  const photo = screen.getByTestId("cheeseburgerImage");

  // Action
  userEvent.click(photo);

  // Assertion
  expect(screen.getByText("The cheeseburger")).toBeVisible(); // The difference here being that there is no 'the' in the item title on the menu screen, only in the description modal.
});

test("Description modal closes if user clicks on the modal exit icon", () => {
  render(
    <MemoryRouter>
      <MenuPage />
    </MemoryRouter>
  );
  const photo = screen.getByTestId("cheeseburgerImage");

  // Action
  userEvent.click(photo);
  userEvent.click(screen.getByTestId("CloseIcon"));

  // Assertion
  expect(screen.queryByText("The cheeseburger")).toBeNull();
});
