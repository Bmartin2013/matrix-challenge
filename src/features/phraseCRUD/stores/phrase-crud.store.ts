import { create } from "zustand";
import { provideCards } from "../domain/providers/PhraseCrudProvider";
import { PhraseCrudState } from "../typings/phrase-crud.state";

export const usePhraseCrudStore = create<PhraseCrudState>((set) => ({
  searchString: "",
  allCards: [],
  loading: true,
  error: null,

  setSearchString: (value) => set({ searchString: value }),

  fetchCards: async () => {
    try {
      set({ loading: true, error: null });
      const data = await provideCards();
      set({ allCards: data });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));
