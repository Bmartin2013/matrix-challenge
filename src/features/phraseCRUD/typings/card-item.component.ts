import { Card } from "@/domain/entities";

export type CardItemProps = {
  card: Card;
  deletingId?: string | null;
  onDelete: (id: string) => void;
};