import { memo } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { CardItemProps } from "@/features/phraseCRUD/typings";

const CardItem = memo(
  ({ card, deletingId, onDelete }: CardItemProps) => {
    const isDeleting = deletingId === card.id;

    return (
      <Card variant="outlined">
        <CardContent className="specialCardContent">
          <Typography className="cardPhrase" variant="h5">
            {card.phrase}
          </Typography>
        </CardContent>

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

CardItem.displayName = 'CardItem';
export default CardItem;
