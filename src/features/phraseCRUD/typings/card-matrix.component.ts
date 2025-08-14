import { Card } from "../domain/typings/Card";

export type CardMatrixProps = { cards: Card[], onDelete: (id:string) => void, deletingId: string | null, errorDelete: string | null }