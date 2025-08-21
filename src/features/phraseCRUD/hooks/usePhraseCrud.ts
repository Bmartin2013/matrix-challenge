import { useEffect } from "react";
import { usePhraseCrudStore } from "@/features/phraseCRUD/stores";

export function usePhraseCrud() {
  const {
    searchString,
    setSearchString,
    allCards,
    loadingFetch,
    errorFetch,
    loadingAdd,
    errorAdd,
    fetchCards,
    addCard,
    deleteCard,
    errorDelete,
    deletingId,
  } = usePhraseCrudStore();

  useEffect(() => {
    let called = false;
    // doing this to avoid double rendering in dev strict
    if (!called) fetchCards();
    return () => {
      called = true;
    };
  }, [fetchCards]);

  useEffect(() => {
    fetchCards(searchString);
  }, [searchString, fetchCards]);

  const cards = allCards;

  return {
    cards,
    searchString,
    errorFetch,
    loadingFetch,
    loadingAdd,
    errorAdd,
    setSearchString,
    addCard,
    deleteCard,
    errorDelete,
    deletingId,
  };
}
