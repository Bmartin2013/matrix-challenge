import { useState } from "react";
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
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="new-phrase" className="sr-only">
        Add your phrase
      </label>
      <input
        id="new-phrase"
        name="new-phrase"
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Add a new card…"
        autoComplete="off"
      />
      <button aria-busy={disabled} type="submit" disabled={!phrase.trim() || disabled}>
        {buttonTitle}
      </button>
    </form>
  );
};
