import { useState, useCallback } from "react";
import { validatePhrase } from "@domain/validators";

export function usePhraseForm(
  onSubmit: (phrase: string) => void,
  deps: any[] = []
) {
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((value: string) => {
    setPhrase(value);
    const validation = validatePhrase(value);
    setError(validation);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validation = validatePhrase(phrase);
      if (validation) {
        setError(validation);
        return;
      }
      onSubmit(phrase.trim());
      setPhrase("");
      setError(null);
    },
    [phrase, onSubmit, ...deps]
  );

  const isDisabled = !phrase.trim() || Boolean(error);

  return {
    phrase,
    error,
    isDisabled,
    handleChange,
    handleSubmit,
    setPhrase,
  };
}
