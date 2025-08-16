import { memo } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { CardItemProps } from "@/features/phraseCRUD/typings";

export const CardItem = memo(
  ({ card, deletingId, errorDelete, onDelete }: CardItemProps) => {
    const isDeleting = deletingId === card.id;
    const hasError = isDeleting && errorDelete;

    return (
      <Card variant="outlined">
        <CardContent className="specialCardContent">
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
    );
  }
);
