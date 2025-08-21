import { Card } from "@domain/entities";

export interface PhraseCrudService {
    getCards(query?:string): Promise<Card[]>;
    addCard(card:Card): Promise<Card[]>;
    deleteCard(id:string): Promise<Card[]>;
  }
  