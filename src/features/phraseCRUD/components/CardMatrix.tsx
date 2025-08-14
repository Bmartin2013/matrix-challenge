import { memo } from "react";
import { CardMatrixProps } from "../typings/card-matrix.component";
import { CardItem } from "./CardItem";

export const CardMatrix = memo(
  ({ cards, onDelete, deletingId, errorDelete }: CardMatrixProps) => {
    return (
      <ul>
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            deletingId={deletingId}
            errorDelete={errorDelete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
);
