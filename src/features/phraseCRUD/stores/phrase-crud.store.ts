import { create } from "zustand";
import { PhraseCrudState } from "@features/phraseCRUD/typings";
import {
  validateCard,
  validatePhrase,
} from "@/domain/validators";
import {
  provideAddCard,
  provideCards,
  provideDeleteCard,
} from "../infrastructure/providers/PhraseCrudProvider";
import { ERRORS } from "@/constants";

export const usePhraseCrudStore = create<PhraseCrudState>((set, get) => ({
  searchString: "",
  allCards: [],
  loadingFetch: true,
  loadingAdd: false,
  errorFetch: null,
  errorAdd: null,
  deletingId: null,
  errorDelete: null,

  setSearchString: (value) => set({ searchString: value }),

  fetchCards: async (query?:string) => {
    try {
      set({ loadingFetch: true, errorFetch: null });
      const data = await provideCards(query);
      set({ allCards: data });
    } catch (err) {
      set({ errorFetch: (err as Error).message });
    } finally {
      set({ loadingFetch: false });
    }
  },

  addCard: async (phrase: string) => {
    try {
      set({ loadingAdd: true, errorAdd: null });

      const submitError =
        validatePhrase(phrase) || validateCard(get().allCards, phrase);

      if (submitError) {
        set({ errorAdd: submitError });
        return;
      }

      const data = await provideAddCard(phrase);
      set({ allCards: data });
    } catch (err) {
      set({ errorAdd: (err as Error).message });
    } finally {
      set({ loadingAdd: false });
    }
  },
  deleteCard: async (id: string) => {
    set({ deletingId: id, errorDelete: null });
    try {
      const data = await provideDeleteCard(id);
      set({ allCards: data });
    } catch (e) {
      set({ errorDelete: (e as Error).message ?? ERRORS.delete.generic });
    } finally {
      set({ deletingId: null });
    }
  },
}));
