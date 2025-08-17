import { renderWithTheme } from "@/test-utils/render";
import { CardMatrix, NewCardForm, SearchBar } from "../components";
import { within } from "@testing-library/react";
import { CARDS_FIXTURE, EMPTY_CARDS } from "@/test-utils/fixtures";
import { Card } from "@/domain/entities";
import { ERRORS } from "@/constants";
import { renderWithStates } from "../utils/react";
import { ReactElement } from "react";

export const newCardFormSetup = (
  overrides?: Partial<React.ComponentProps<typeof NewCardForm>>
) => {
  const onAdd = jest.fn(async () => true);
  const utils = renderWithTheme(
    <NewCardForm
      onAdd={onAdd}
      buttonTitle="Add"
      disabled={false}
      errorAdd=""
      {...overrides}
    />
  );

  const form = utils.getByTestId("new-card-form");
  const input = within(form).getByLabelText(/new card/i);
  const button = within(form).getByRole("button", { name: /^add$/i });

  return { ...utils, input, button, onAdd, form };
};

export const newCardFormLoadingSetup = (
  overrides?: Partial<React.ComponentProps<typeof NewCardForm>>
) => {
  const onAdd = jest.fn(async () => true);
  const utils = renderWithTheme(
    <NewCardForm
      onAdd={async () => true}
      buttonTitle="Adding..."
      disabled={true}
      errorAdd={""}
      {...overrides}
    />
  );

  const form = utils.getByTestId("new-card-form");
  const button = within(form).getByRole("button", { name: /adding.../i });

  return { ...utils, button, onAdd, form };
};


export const newCardFormErrorSetup = (
    overrides?: Partial<React.ComponentProps<typeof NewCardForm>>
  ) => {
    const onAdd = jest.fn(async () => true);
    const utils = renderWithTheme(
      <NewCardForm
        onAdd={async () => true}
        buttonTitle="Adding..."
        disabled={true}
        errorAdd={"Test error"}
        {...overrides}
      />
    );
  
    const form = utils.getByTestId("new-card-form");
    const button = within(form).getByRole("button", { name: /adding.../i });
  
    return { ...utils, button, onAdd, form };
  };

export const searcBarSetup = (
  overrides?: Partial<React.ComponentProps<typeof NewCardForm>>
) => {
  const onHandleChange = jest.fn(async () => true);
  const utils = renderWithTheme(
    <SearchBar
      onHandleChange={onHandleChange}
      disabled={false}
      {...overrides}
    />
  );

  const form = utils.getByTestId("search-card-form");
  const input = within(form).getByRole("textbox", { name: /search/i });

  return { ...utils, input, onHandleChange, form };
};

export const cardMatrixSetup = (
  overrides?: Partial<React.ComponentProps<typeof NewCardForm>>
) => {
  const onDelete = jest.fn(async () => {});
  const utils = renderWithTheme(
    <CardMatrix
      cards={CARDS_FIXTURE as Card[]}
      onDelete={async () => {}}
      deletingId={null}
      errorDelete={null}
      {...overrides}
    />
  );

  const form = utils.getByTestId("card-matrix");
  const deleteButtons = within(form).getAllByRole("button", {
    name: /delete/i,
  });

  return { ...utils, deleteButtons, onDelete, form };
};



export const emptyCardMatrixSetup : ReactElement = renderWithStates({
  loading: false,
  error: "",
  emptyState: EMPTY_CARDS.length === 0,
  emptyMessage: ERRORS.fetch.empty,
  loadingClass: "centerSpinnerBox",
  component: (
    <CardMatrix
      cards={EMPTY_CARDS}
      onDelete={async () => {}}
      deletingId={""}
      errorDelete={""}
    />
  ),
});

export const errorCardMatrixSetup : ReactElement = renderWithStates({
  loading: false,
  error: ERRORS.fetch.generic,
  emptyState: EMPTY_CARDS.length === 0,
  emptyMessage: "",
  loadingClass: "centerSpinnerBox",
  component: (
    <CardMatrix
      cards={EMPTY_CARDS}
      onDelete={async () => {}}
      deletingId={""}
      errorDelete={""}
    />
  ),
});