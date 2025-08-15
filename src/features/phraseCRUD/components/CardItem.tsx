import { memo } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { CardItemProps } from "../typings/card-item.component";
import { renderWithStates } from "../utils/render-with-states.utils";

export const CardItem = memo(
  ({ card, deletingId, errorDelete, onDelete }: CardItemProps) => {
    const isDeleting = deletingId === card.id;
    const hasError = isDeleting && errorDelete;

    return renderWithStates({
      loading: isDeleting,
      error: hasError ? errorDelete : undefined,
      component: (
        <Card variant="outlined">
          <CardContent className="specialCardContent" >
            <Typography className="cardPhrase" variant="h5">
              {card.phrase}
            </Typography>
          </CardContent>

          {hasError && (
            <Alert severity="error" sx={{ mx: 2, mb: 1 }}>
              {errorDelete}
            </Alert>
          )}

          <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => onDelete(card.id)}
              disabled={isDeleting}
              startIcon={isDeleting ? <CircularProgress size={16} /> : null}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ),
    });
  }
);
