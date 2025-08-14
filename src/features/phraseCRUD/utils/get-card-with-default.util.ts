import { CARD_DEFAULT } from "../constants/defaults";
import { Card } from "../domain/typings/Card";
import { resolveOptions } from "./Resolver.util";

export function getCardWithDefaults(card: Partial<Card>): Card {
  return resolveOptions(CARD_DEFAULT, card);
}