import { memo } from "react";
import { CardMatrixProps } from "../typings/card-matrix.component";

export const CardMatrix = memo(({ cards }: CardMatrixProps) => {
  return (
    <>
      <ul>
        {cards.map((card, index) => (
          <li key={`card-${card.id}-${index}`}>{card.phrase}</li>
        ))}
      </ul>
    </>
  );
});
