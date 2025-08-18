import { Card } from "@/domain/entities";
import { normalizeSearch } from "@/domain/utils/normalize-string.util";

export const findQuotesByText = (cards: Card[], q: string) => {
  const needle = normalizeSearch(q);     
  if (!needle) return cards;
  return cards.filter(c => normalizeSearch(c.phrase).includes(needle));
};
