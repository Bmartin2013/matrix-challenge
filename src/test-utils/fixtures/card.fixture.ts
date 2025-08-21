import { Card } from "@/domain/entities/Card";
import { FIXED_NOW } from "./constants/dates";

export const CARDS_FIXTURE: Card[] = [
  { id: "1", phrase: "Árbol", createdAt: 0 },
  { id: "2", phrase: "Café con leche", createdAt: 1 },
  { id: "3", phrase: "Hola Mundo", createdAt: 1 },
  { id: "4", phrase: "Fish and chips", createdAt: 1 },
  { id: "5", phrase: "canon", createdAt: 1 },
];

export const EMPTY_CARDS: Card[] = [];

export const PARTIAL_CARDS: Partial<Card>[] = [
  { id: "1", phrase: "Hola" },
  { id: "2", phrase: "Mundo", createdAt: FIXED_NOW - 1 },
];
