import { normalizeString } from "@domain/utils/normalize-string.util";


describe("normalizeString (for search/compare strings)", () => {
  it("remove accent and converts to lowercase", () => {
    expect(normalizeString("Árbol")).toBe("arbol");
  });

  it("trim and remove multiple whitespaces", () => {
    expect(normalizeString("  fish   and   chips ")).toBe("fishandchips");
  });
});