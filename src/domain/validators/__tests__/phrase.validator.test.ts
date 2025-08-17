import { ERRORS } from "@/constants";
import { validatePhrase } from "@domain/validators";

describe("validatePhrase", () => {
  it("empty string or whitespaces → error", () => {
    expect(validatePhrase("")).toBeTruthy();
    expect(validatePhrase("   ")).toBeTruthy();
  });

  it("minLength = 2", () => {
    expect(validatePhrase("a")).toMatch(ERRORS.add.minLength);
    expect(validatePhrase("ab")).toBeNull();
  });

  it("maxLength = 30", () => {
    const s31 = "a".repeat(31);
    expect(validatePhrase(s31)).toMatch(ERRORS.add.maxLength);
    const s30 = "a".repeat(30);
    expect(validatePhrase(s30)).toBeNull();
  });
});
