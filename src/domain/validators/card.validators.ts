import { Card } from "@domain/entities";
import { isDuplicate } from "./is-duplicate.validators";

export function validateCard(cards: Card[], phrase: string) {
  if (isDuplicate(cards, phrase)) {
    return 'This card already exists';
  }
  return null;
}
