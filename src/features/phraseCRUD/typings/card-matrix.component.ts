import { Card } from "@/domain/entities";

export type CardMatrixProps = { cards: Card[], onDelete: (id:string) => void, deletingId: string | null, errorDelete: string | null }