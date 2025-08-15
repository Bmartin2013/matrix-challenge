import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { NewCardFormProps } from "../typings/new-card-form.component";

export const NewCardForm = ({ onAdd, buttonTitle, disabled }: NewCardFormProps) => {
  const [phrase, setPhrase] = useState("");

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = phrase.trim();
    if (!clean) return;
    onAdd(clean);
    setPhrase("");
  };

  return (
    <Box
      component="form"
      onSubmit={onHandleSubmit}
      className="inputBox"
    >
      <TextField
        id="new-phrase"
        name="new-phrase"
        label="New Card"
        variant="outlined"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Add a new card…"
        autoComplete="off"
        fullWidth
        size="small"
      />
      <Button
        aria-busy={disabled}
        type="submit"
        variant="contained"
        color="primary"
        disabled={!phrase.trim() || disabled}
      >
        {buttonTitle}
      </Button>
    </Box>
  );
};
