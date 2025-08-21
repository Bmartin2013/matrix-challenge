import { Card } from "@domain/entities";

export interface PhraseCrudClient {
    getCards(query?:string): Promise<Card[]>;
    addCard(phrase:string): Promise<Card[]>;
    deleteCard(id:string): Promise<Card[]>;
  }
  