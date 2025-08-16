export const phraseRules = {
  minLength: 2,
  maxLength: 30,
};

export function validatePhrase(value: string) {
  const clean = value.trim();
  if (!clean) return "Card Phrase cannot be empty";
  if (clean.length < phraseRules.minLength)
    return `Phrase must be at least ${phraseRules.minLength} long`;
  if (clean.length > phraseRules.maxLength)
    return `Cannot exceed ${phraseRules.maxLength} caracters`;
  return null;
}
