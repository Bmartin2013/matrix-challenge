import { CARDS_FIXTURE } from "@/test-utils/fixtures";
import { findQuotesByText } from "@features/phraseCRUD/utils/find-quotes-by-text.util";

describe("findQuotesByText", () => {
  it('search normalized texts ( " CAFÉ   con  leche " )', () => {
    const res = findQuotesByText(CARDS_FIXTURE, " CAFÉ   con  leche ");
    expect(res.map(c => c.id)).toEqual(["2"]);
  });

  it('search coincidences ignoring whitespaces ("le ch" → "leche")', () => {
    const res = findQuotesByText(CARDS_FIXTURE, "le ch");
    expect(res.map(c => c.id)).toEqual(["2"]);
  });

  it("returns all cards after empty search", () => {
    const res = findQuotesByText(CARDS_FIXTURE, "");
    expect(res.length).toBe(4);
  });
});
