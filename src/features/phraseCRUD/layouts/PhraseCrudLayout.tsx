import { CardMatrix } from "../components/CardMatrix";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { NewCardForm } from "../components/NewCardForm";
import { SearchBar } from "../components/SearchBar";
import { usePhraseCrud } from "../hooks/usePhraseCrud";

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

  const renderCardMatrixContent = () => {
    if (loadingFetch)
      return <LoadingState message="Loading cards, please wait..." />;
    if (errorFetch) return <ErrorState message={errorFetch} />;
    if (cards.length === 0) return <EmptyState message="No available cards" />;

    return (
      <CardMatrix
        onDelete={deleteCard}
        cards={cards}
        deletingId={deletingId}
        errorDelete={errorDelete}
      />
    );
  };

  return (
    <>
      <h1>React Matrix Challenge</h1>
      <SearchBar onHandleChange={setSearchString} />
      <NewCardForm onAdd={addCard} loading={loadingAdd} />
      {renderCardMatrixContent()}
      {errorAdd && (
        <small style={{ color: "crimson" }}>Error: {errorAdd}</small>
      )}
    </>
  );
};
