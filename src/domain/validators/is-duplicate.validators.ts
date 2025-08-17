import { normalizeString } from "@/domain/utils/normalize-string.util";
import { Card } from "@/domain/entities/Card";

// cards with special characters like arbol and arbol! are considered as different
export const isDuplicate = (cards: Card[], phrase: string) => {
  const needle = normalizeString(phrase);
  return cards.some(c => normalizeString(c.phrase) === needle);
};