import { memo } from "react";
import { CardMatrixProps } from "../typings/card-matrix.component";

export const CardMatrix = memo(({ cards, onDelete, deletingId, errorDelete }: CardMatrixProps) => {
    return (
      <ul>
        {cards.map((card) => {
          const deleting = deletingId === card.id;
          return (
            <li key={card.id}>
              <span>{card.phrase}</span>
              <button onClick={() => onDelete(card.id)} disabled={deleting}>
                {deleting ? "Deleting…" : "Delete"}
              </button>
              {errorDelete && deleting && (
                <small style={{ color: "crimson" }}>{errorDelete}</small>
              )}
            </li>
          );
        })}
      </ul>)
});
