import { ERRORS } from "@/constants";
import { normalizeString } from "@/domain/utils/normalize-string.util";
import { useDebouncedValue } from "@/hooks";
import {
  ControlsWrapper,
  SearchBar,
  NewCardForm,
} from "@features/phraseCRUD/components";
import { usePhraseCrud } from "@features/phraseCRUD/hooks/usePhraseCrud";
import { renderWithStates } from "@features/phraseCRUD/utils/react";
import { useEffect, useState } from "react";
import CardMatrix from "../components/CardMatrix";

export const PhraseCrudLayout = () => {
  const {
    cards,
    setSearchString,
    loadingFetch,
    errorFetch,
    loadingAdd,
    errorAdd,
    addCard,
    deleteCard,
    errorDelete,
    deletingId,
  } = usePhraseCrud();

  const cardMatrixContent = renderWithStates({
    loading: loadingFetch,
    error: errorFetch,
    emptyState: cards.length === 0,
    emptyMessage: ERRORS.fetch.empty,
    loadingClass: "centerSpinnerBox",
    component: (
      <CardMatrix
        cards={cards}
        onDelete={deleteCard}
        deletingId={deletingId}
        errorDelete={errorDelete}
      />
    ),
  });

  const [rawSearch, setRawSearch] = useState("");
  const searchString = useDebouncedValue(rawSearch, 300);

  useEffect(() => {
    const normalized = normalizeString(searchString);
    setSearchString(normalized);
  }, [searchString, setSearchString]);

  useEffect(() => {
    const normalized = normalizeString(searchString);
    setSearchString(normalized);
  }, [searchString, setSearchString]);


  return (
    <>
      <ControlsWrapper>
        <SearchBar
          onHandleChange={setRawSearch}
          disabled={loadingFetch}
        />
        <NewCardForm
          onAdd={addCard}
          buttonTitle={loadingAdd ? "Adding..." : "Add"}
          disabled={loadingAdd}
          errorAdd={errorAdd ?? ""}
        />
      </ControlsWrapper>

      {cardMatrixContent}
    </>
  );
};
