import { ERRORS } from "@/constants";
import { CARDS_FIXTURE } from "@/test-utils/fixtures";
import { validateCard } from "@domain/validators";

describe("validateCard", () => {
  it("validates duplicated cards ignoring accent/whitespaces/case", () => {
      expect(validateCard(CARDS_FIXTURE, "arbol")).toMatch(ERRORS.add.duplicate);
      expect(validateCard(CARDS_FIXTURE, " Ár  bol ")).toMatch(ERRORS.add.duplicate);
      expect(validateCard(CARDS_FIXTURE, "ÁRBOL")).toBe(ERRORS.add.duplicate);
    });

    it("consider cards with special chars as different", () => {
        expect(validateCard(CARDS_FIXTURE, "arbol!")).toBe(null); // NOTE: same card with special chars is considered as different
      });
});
