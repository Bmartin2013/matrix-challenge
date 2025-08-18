import { CARDS_FIXTURE } from "@/test-utils/fixtures";
import { isDuplicate } from "@domain/validators/is-duplicate.validators";


describe("isDuplicate", () => {
  it("detects duplicated cards ignoring accent/whitespaces/case", () => {
    expect(isDuplicate(CARDS_FIXTURE, "arbol")).toBe(true);
    expect(isDuplicate(CARDS_FIXTURE, " Ár  bol ")).toBe(true);
    expect(isDuplicate(CARDS_FIXTURE, "ÁRBOL")).toBe(true);
  });

  it("consider cards with special chars as different", () => {
    expect(isDuplicate(CARDS_FIXTURE, "arbol!")).toBe(false); // NOTE: same card with special chars is considered as different
  });

  it("consider cards with ñ as different", () => {
    expect(isDuplicate(CARDS_FIXTURE, "cañón")).toBe(false);
  });
});
