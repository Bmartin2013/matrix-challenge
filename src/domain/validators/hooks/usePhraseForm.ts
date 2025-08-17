import { useState, useCallback, useEffect } from 'react';
import { validateCard, validatePhrase } from '@domain/validators';
import { usePhraseCrudStore } from '@/features/phraseCRUD/stores';

export function usePhraseForm(
  onSubmit: (phrase: string) => void,
  disabled: boolean,
  externalError?: string | null,
) {
  const [phrase, setPhrase] = useState('');
  const [error, setError] = useState<string | null>(null);
  const {allCards} = usePhraseCrudStore()

  const handleChange = useCallback((value: string) => {
    setPhrase(value);
    setError(validatePhrase(value));
  }, []);

 
  useEffect(() => {
    if (externalError) setError(externalError);
  }, [externalError]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validation = validatePhrase(phrase) || validateCard(allCards,phrase);
      if (validation) {
        setError(validation);
        return;
      }
      onSubmit(phrase);
      setPhrase('');
      setError(null);
    },
    [phrase, onSubmit, disabled]
  );

  const isDisabled = !phrase.trim() || Boolean(error);

  return { phrase, error, isDisabled, handleChange, handleSubmit, setPhrase };
}