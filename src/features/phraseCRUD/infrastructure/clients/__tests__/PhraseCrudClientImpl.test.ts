import { PhraseCrudClientImpl } from "../PhraseCrudClientImpl";
import { PhraseCrudService } from "@/domain/interfaces";
import { Card } from "@/domain/entities/Card";
import { FIXED_NOW } from "@/test-utils/fixtures/constants/dates";
import { CARDS_FIXTURE, PARTIAL_CARDS } from "@/test-utils/fixtures";


describe("PhraseCrudClientImpl", () => {
  let serviceMock: jest.Mocked<PhraseCrudService>;
  let client: PhraseCrudClientImpl;

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(FIXED_NOW);

    serviceMock = {
      getCards: jest.fn(),
      addCard: jest.fn(),
      deleteCard: jest.fn(),
    } as unknown as jest.Mocked<PhraseCrudService>;

    client = new PhraseCrudClientImpl(serviceMock);
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  test("getCards resend query and map defaults", async () => {
    serviceMock.getCards.mockResolvedValue(PARTIAL_CARDS as Card[]);

    const p = client.getCards("ho");
    jest.advanceTimersByTime(1200);
    const result = await p;

    expect(serviceMock.getCards).toHaveBeenCalledWith("ho");
    expect(result).toHaveLength(2);
    
    expect(result[0]).toHaveProperty("createdAt");
    expect(result[1]).toHaveProperty("createdAt", FIXED_NOW - 1);
  });

  test("builds card w/ trim and default", async () => {
    const returned = [CARDS_FIXTURE[3]];
    serviceMock.addCard.mockResolvedValue(returned as Card[]);

    const out = await client.addCard("  Hola  ");

    expect(serviceMock.addCard).toHaveBeenCalledTimes(1);
    const sent = serviceMock.addCard.mock.calls[0][0];
    expect(sent).toMatchObject({
      phrase: "Hola",
    });
    expect(typeof sent.id).toBe("string");
    expect(sent.createdAt).toBe(FIXED_NOW);

    expect(out).toEqual(returned);
  });

  test("deleteCard resend id and map response", async () => {
    const returned = [CARDS_FIXTURE[3]];
    serviceMock.deleteCard.mockResolvedValue(returned as Card[]);
    const out = await client.deleteCard("3");

    expect(serviceMock.deleteCard).toHaveBeenCalledWith("3");
    expect(out).toEqual(returned);
  });

  test("Throw service error", async () => {
    serviceMock.getCards.mockRejectedValue(new Error("Internal server error"));
    const p = client.getCards();
    jest.advanceTimersByTime(1200);
    await expect(p).rejects.toThrow("Internal server error");
  });
});
