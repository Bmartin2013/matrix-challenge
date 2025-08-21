import { PhraseCrudService } from "@/domain/interfaces";
import { Card } from "@/domain/entities";
import { STORAGE_KEY } from "@features/phraseCRUD/constants/storage";
import { findQuotesByText } from "../../utils";

export class PhraseCrudServiceImpl implements PhraseCrudService {
  constructor() {}

  async getCards(query?: string): Promise<Card[]> {
    const raw = localStorage.getItem(STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : [];

    if (!query || !query.trim()) return all;

    return findQuotesByText(all, query);
  }

  // so far we're returning all cards for add/delete because we're using local storage
  // in a real API call we should refetch after these actions or re-render an updated version of the cards' array
  async addCard(card: Card): Promise<Card[]> {
    const current = await this.getCards();
    const updated = [...current, card];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }

  async deleteCard(id: string): Promise<Card[]> {
    const curr = await this.getCards();
    const next = curr.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }
}
