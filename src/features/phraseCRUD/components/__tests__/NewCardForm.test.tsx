import userEvent from "@testing-library/user-event";
import { screen, fireEvent } from "@testing-library/react";
import { ERRORS } from "@/constants";
import {
    newCardFormErrorSetup,
  newCardFormLoadingSetup,
  newCardFormSetup,
} from "../../test-utils/setup";

test("disable add if empty string", () => {
  const { button } = newCardFormSetup();
  expect(button).toBeDisabled();
});

test("disables add if whitespaces only", async () => {
  const { input, button } = newCardFormSetup();
  await userEvent.type(input, "   ");
  expect(button).toBeDisabled();
});

test("minLength → disable submit and show minLength error", async () => {
  const { input, button } = newCardFormSetup();
  await userEvent.type(input, "a");
  expect(button).toBeDisabled();
  expect(screen.getByText(ERRORS.add.minLength)).toBeInTheDocument();
});

test("allows submit if the phrase has the allowed number of characters (max:30, min: 2)", async () => {
  const { input, onAdd, button } = newCardFormSetup();
  await userEvent.type(input, "ab");
  fireEvent.submit(button);
  expect(onAdd).toHaveBeenCalledWith("ab");
});

test("disables add button if phrase exceeds 30 characters", async () => {
  const { input, button } = newCardFormSetup();
  const s31 = "a".repeat(31);

  await userEvent.type(input, s31);
  expect(button).toBeDisabled();
  expect(screen.getByText(ERRORS.add.maxLength)).toBeInTheDocument();
});

test("submits if card phrase is lesser than 30 characters", async () => {
  const { input, onAdd, button } = newCardFormSetup();
  const s30 = "a".repeat(29);

  await userEvent.type(input, s30);
  fireEvent.submit(button);
  expect(onAdd).toHaveBeenCalledWith(s30);
});

test("disables add button if there is any external loading", () => {
  const { button } = newCardFormLoadingSetup();
  expect(button).toBeDisabled();
});

test("shows external error", () => {
  const { button } = newCardFormErrorSetup();
  expect(button).toBeDisabled();
  expect(screen.getByText("Test error")).toBeInTheDocument();
});
