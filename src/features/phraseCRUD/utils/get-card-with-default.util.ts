import { Card } from "@/domain/entities";
import { CARD_DEFAULT } from "@features/phraseCRUD/constants/defaults";
import { resolveOptions } from "./resolve-options.util";

export function getCardWithDefaults(card: Partial<Card>): Card {
  return resolveOptions(CARD_DEFAULT, card);
}