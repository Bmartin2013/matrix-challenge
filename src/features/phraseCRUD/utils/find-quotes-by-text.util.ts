import { Card } from "../domain/typings/Card";

export function findQuotesByText(cards: Card[], search: string): Card[] {
  const q = search.trim().toLowerCase();
  if (!q) return cards;
  return cards.filter((card) => card.phrase.toLowerCase().includes(q));
}
