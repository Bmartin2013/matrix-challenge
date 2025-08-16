import { Card } from "@domain/entities";

export interface PhraseCrudClient {
    getCards(): Promise<Card[]>;
    addCard(phrase:string): Promise<Card[]>;
    deleteCard(id:string): Promise<Card[]>;
  }
  