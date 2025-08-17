import { normalizeString } from "@/domain/utils/normalize-string.util";
import { Card } from "@/domain/entities/Card";

export const isDuplicate = (cards: Card[], phrase: string) => {
  const needle = normalizeString(phrase);
  return cards.some(c => normalizeString(c.phrase) === needle);
};