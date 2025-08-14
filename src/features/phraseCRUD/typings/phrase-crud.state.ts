import { Card } from "../domain/typings/Card";

export interface PhraseCrudState {
  searchString: string;
  allCards: Card[];
  loading: boolean;
  error: string | null;
  setSearchString: (value: string) => void;
  fetchCards: () => Promise<void>;
}