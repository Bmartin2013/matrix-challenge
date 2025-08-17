import { Box, TextField, Button } from "@mui/material";
import { NewCardFormProps } from "@/features/phraseCRUD/typings";
import { usePhraseForm } from "@/domain/validators";

export const NewCardForm = ({
  onAdd,
  buttonTitle,
  disabled,
  errorAdd,
}: NewCardFormProps) => {
  const { phrase, error, isDisabled, handleChange, handleSubmit } =
    usePhraseForm(onAdd, disabled, errorAdd);

  return (
    <Box component="form" onSubmit={handleSubmit} className="inputBox"  data-testid="new-card-form" >
      <TextField
        id="new-phrase"
        name="new-phrase"
        label="New Card"
        variant="outlined"
        value={phrase}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Add a new card…"
        autoComplete="off"
        fullWidth
        size="small"
        error={Boolean(error)}
        helperText={error || ""}
      />
      <Button
        aria-busy={isDisabled}
        type="submit"
        variant="contained"
        color="primary"
        disabled={isDisabled}
      >
        {buttonTitle}
      </Button>
    </Box>
  );
};
