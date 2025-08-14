import { CardMatrix } from "../components/CardMatrix";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { SearchBar } from "../components/SearchBar";
import { usePhraseCrud } from "../hooks/usePhraseCrud";

export const PhraseCrudLayout = () => {
  const { cards, setSearchString, loading,error } = usePhraseCrud();

  const renderCardMatrixContent = () => {
    if (loading) return <LoadingState message="Loading cards, please wait..." />;
    if (error) return <ErrorState message={error} />;
    if (cards.length === 0) return <EmptyState message="No available cards" />;

    return <CardMatrix cards={cards} />;
  };

  return (
    <>
      <h1>React Matrix Challenge</h1>
      <SearchBar onHandleChange={setSearchString} />
      {renderCardMatrixContent()}
    </>
  );
};
