import { ERRORS } from "@/constants";

export const phraseRules = {
  minLength: 2,
  maxLength: 30,
};

export function validatePhrase(value: string) {
  const clean = value.trim();
  if (!clean) return ERRORS.add.empty;
  if (clean.length < phraseRules.minLength)
    return ERRORS.add.minLength;
  if (clean.length > phraseRules.maxLength)
    return ERRORS.add.maxLength;
  return null;
}
