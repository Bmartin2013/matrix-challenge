import { memo } from "react";
import { CardItemProps } from "../typings/card-item.component";
import { renderWithStates } from "../utils/render-with-states.utils";

export const CardItem = memo(({ card, deletingId, errorDelete, onDelete }: CardItemProps) => {
  const isDeleting = deletingId === card.id;
  const hasError = isDeleting && errorDelete;

  return renderWithStates({
    loading: isDeleting,
    error: hasError ? errorDelete : undefined,
    component: (
      <li>
        <p>{card.phrase}</p>
        <button onClick={() => onDelete(card.id)}>Delete</button>
      </li>
    ),
  });
});
