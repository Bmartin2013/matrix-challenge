import { CardMatrix, ControlsWrapper, SearchBar, NewCardForm } from "@features/phraseCRUD/components";
import { usePhraseCrud } from "@features/phraseCRUD/hooks/usePhraseCrud";
import { renderWithStates } from "@features/phraseCRUD/utils";

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
    emptyMessage: "No available cards",
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

  return (
    <>
      <ControlsWrapper>
        <SearchBar
          onHandleChange={setSearchString}
          disabled={cards.length === 0}
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
