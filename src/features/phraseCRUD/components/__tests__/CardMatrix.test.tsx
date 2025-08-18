import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils/render";
import { CARDS_FIXTURE } from "@/test-utils/fixtures";
import { Card } from "@/domain/entities";
import { ERRORS } from "@/constants";
import {
  emptyCardMatrixSetup,
  errorCardMatrixSetup,
} from "../../test-utils/setup";
import CardMatrix from "../CardMatrix";

test("render cards", () => {
  renderWithTheme(
    <CardMatrix
      cards={CARDS_FIXTURE as Card[]}
      onDelete={async () => {}}
      deletingId={null}
      errorDelete={null}
    />
  );
  expect(screen.getByText(/árbol/i)).toBeInTheDocument();
  expect(screen.getByText(/café con leche/i)).toBeInTheDocument();
});

test("render no cards available if there are no cards", () => {
  renderWithTheme(emptyCardMatrixSetup);
  expect(screen.getByText(ERRORS.fetch.empty)).toBeInTheDocument();
});

test("render loading error", () => {
  renderWithTheme(errorCardMatrixSetup);
  expect(screen.getByText(ERRORS.fetch.generic)).toBeInTheDocument();
});

test("invoke onDelete after clicking delete", async () => {
  const onDelete = jest.fn(async () => {});
  renderWithTheme(
    <CardMatrix
      cards={CARDS_FIXTURE}
      onDelete={onDelete}
      deletingId={null}
      errorDelete={null}
    />
  );

  const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
  await userEvent.click(deleteButtons[0]);
  expect(onDelete).toHaveBeenCalled();
});

test("show error message if delete item fails", async () => {
  renderWithTheme(
    <CardMatrix
      cards={CARDS_FIXTURE}
      onDelete={async () => {}}
      deletingId={null}
      errorDelete={"fatal error"}
    />
  );

  expect(screen.getByText(/fatal error/i)).toBeInTheDocument();
});
