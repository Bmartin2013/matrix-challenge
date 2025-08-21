import { STORAGE_KEY } from "@/features/phraseCRUD/constants/storage";
import { PhraseCrudServiceImpl } from "../PhraseCrudServiceImpl";
import { Card } from "@/domain/entities";
import { CARDS_FIXTURE } from "@/test-utils/fixtures";

describe("PhraseCrudServiceImpl", () => {
  let service: PhraseCrudServiceImpl;

  beforeEach(() => {
    service = new PhraseCrudServiceImpl();
    localStorage.clear();
  });

  it("returns all cards if there is no search", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CARDS_FIXTURE));

    const result = await service.getCards();
    expect(result).toHaveLength(5);
  });

  it("filters cards by query (normalized)", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CARDS_FIXTURE));

    const result = await service.getCards("cafe");
    expect(result).toHaveLength(1);
    expect(result[0].phrase).toBe("Café con leche");
  });

  it("appends the card and persists to localStorage", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CARDS_FIXTURE));
    const newCard: Card = {
      id: "NEW-ID",
      phrase: "Nueva frase",
      createdAt: Date.now(),
    };

    const updated = await service.addCard(newCard);

    expect(updated).toHaveLength(CARDS_FIXTURE.length + 1);
    expect(updated.some((c) => c.id === "NEW-ID")).toBe(true);

    const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    expect(persisted).toHaveLength(CARDS_FIXTURE.length + 1);
    expect(persisted.some((c: Card) => c.id === "NEW-ID")).toBe(true);
  });

  it("removes the card by id and persists", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CARDS_FIXTURE));
    const idToRemove = CARDS_FIXTURE[0].id;

    const updated = await service.deleteCard(idToRemove);

    expect(updated.some((c) => c.id === idToRemove)).toBe(false);
    expect(updated).toHaveLength(CARDS_FIXTURE.length - 1);

    const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    expect(persisted.some((c: Card) => c.id === idToRemove)).toBe(false);
    expect(persisted).toHaveLength(CARDS_FIXTURE.length - 1);
  });

  it("no-op when id does not exist", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CARDS_FIXTURE));
    const updated = await service.deleteCard("NON-EXISTENT-ID");

    expect(updated).toHaveLength(CARDS_FIXTURE.length);
    const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    expect(persisted).toHaveLength(CARDS_FIXTURE.length);
  });
  
});
