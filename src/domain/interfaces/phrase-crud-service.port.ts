import { Card } from "@domain/entities";

export interface PhraseCrudService {
    getCards(): Promise<Card[]>;
    addCard(card:Card): Promise<Card[]>;
    deleteCard(id:string): Promise<Card[]>;
  }
  