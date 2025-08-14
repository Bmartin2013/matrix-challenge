import { create } from "zustand";
import {
  provideAddCard,
  provideCards,
  provideDeleteCard,
} from "../domain/providers/PhraseCrudProvider";
import { PhraseCrudState } from "../typings/phrase-crud.state";

export const usePhraseCrudStore = create<PhraseCrudState>((set) => ({
  searchString: "",
  allCards: [],
  loadingFetch: true,
  loadingAdd: false,
  errorFetch: null,
  errorAdd: null,
  deletingId: null,
  errorDelete: null,

  setSearchString: (value) => set({ searchString: value }),

  fetchCards: async () => {
    try {
      set({ loadingFetch: true, errorFetch: null });
      const data = await provideCards();
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
      set({ errorDelete: (e as Error).message ?? "Error deleting card" });
    } finally {
      set({ deletingId: null });
    }
  },
}));
