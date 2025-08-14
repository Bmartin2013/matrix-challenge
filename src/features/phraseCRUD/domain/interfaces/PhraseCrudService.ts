import { Card } from "../typings/Card";

export interface PhraseCrudService {
    getCards(): Promise<Card[]>; // this should be an HTTP response or local storage response
    addCard(card:Card): Promise<Card[]>;
    deleteCard(id:string): Promise<Card[]>;
  }
  