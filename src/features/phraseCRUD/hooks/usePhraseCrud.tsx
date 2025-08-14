import { useEffect, useMemo } from "react";
import { findQuotesByText } from "../utils/find-quotes-by-text.util";
import { usePhraseCrudStore } from "../stores/phrase-crud.store";

export function usePhraseCrud() {
  const {
    searchString,
    setSearchString,
    allCards,
    loading,
    error,
    fetchCards,
  } = usePhraseCrudStore();

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const cards = useMemo(
    () => (searchString ? findQuotesByText(allCards, searchString) : allCards),
    [searchString, allCards]
  );

  return {
    cards,
    searchString,
    error,
    loading,
    setSearchString,
  };
}
