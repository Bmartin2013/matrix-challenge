import { Card } from "../domain/typings/Card";

export interface PhraseCrudState {
  searchString: string;
  allCards: Card[];
  loadingFetch: boolean;
  loadingAdd: boolean;
  errorFetch: string | null;
  errorAdd: string | null;
  deletingId: string | null;
  errorDelete: string | null;
  setSearchString: (value: string) => void;
  fetchCards: () => Promise<void>;
  addCard: (phrase: string) => Promise<void>;
  deleteCard: (id: string) => Promise<void>;
}