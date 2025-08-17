import { Card } from "@domain/entities";
import { isDuplicate } from "./is-duplicate.validators";
import { ERRORS } from "@/constants";

export function validateCard(cards: Card[], phrase: string) {
  if (isDuplicate(cards, phrase)) {
    return ERRORS.add.duplicate;
  }
  return null;
}
