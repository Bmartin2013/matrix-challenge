import { CardMatrix } from "../components/CardMatrix";
import { NewCardForm } from "../components/NewCardForm";
import { SearchBar } from "../components/SearchBar";
import { usePhraseCrud } from "../hooks/usePhraseCrud";
import { renderWithStates } from "../utils/render-with-states.utils";

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
  loading:loadingFetch,
  error: errorFetch,
  emptyState: cards.length === 0,
  emptyMessage: "No available cards",
  component: (
    <CardMatrix
      cards={cards}
      onDelete={deleteCard}
      deletingId={deletingId}
      errorDelete={errorDelete}
    />
  ),
});

const newCardContent = renderWithStates({
  loading: loadingAdd,
  error: errorAdd,
  component: (
    <NewCardForm onAdd={addCard} buttonTitle={loadingAdd ? "loading..." : "Add"} disabled={loadingAdd} />
  ),
});

  return (
    <>
      <h1>React Matrix Challenge</h1>
      <SearchBar onHandleChange={setSearchString} />
      {newCardContent}
      {cardMatrixContent}
    </>
  );
};
