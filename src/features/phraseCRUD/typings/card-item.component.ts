import { Card } from "../domain/typings/Card";

export type CardItemProps = {
  card: Card;
  deletingId?: string | null;
  errorDelete?: string | null;
  onDelete: (id: string) => void;
};