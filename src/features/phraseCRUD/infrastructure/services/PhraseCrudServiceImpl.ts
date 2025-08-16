import { PhraseCrudService } from "@/domain/interfaces";
import { Card } from "@/domain/entities";
import { STORAGE_KEY } from "@features/phraseCRUD/constants/storage";


export class PhraseCrudServiceImpl implements PhraseCrudService {
  constructor() {}

  async getCards(): Promise<Card[]> {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  async addCard(card: Card): Promise<Card[]> {
    const current = await this.getCards();
    const updated = [...current, card];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }

  async deleteCard(id: string): Promise<Card[]> {
    const curr = await this.getCards();
    const next = curr.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }
}
