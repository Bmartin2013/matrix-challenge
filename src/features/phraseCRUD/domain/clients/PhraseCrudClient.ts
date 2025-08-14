import { withLatency } from "../../hoc/with-latency.hoc";
import { getCardWithDefaults } from "../../utils/get-card-with-default.util";
import { PhraseCrudService } from "../interfaces/PhraseCrudService";
import { Card } from "../typings/Card";

export class PhraseCrudClient {
  private service: PhraseCrudService;

  constructor(service: PhraseCrudService) {
    this.service = service;
    // add a delay effect to simulate async
    this.getCards = withLatency(this.getCards.bind(this), 1200);
  }

  async getCards(): Promise<Card[]> {
    const response: Card[] = await this.service.getCards();
    return response.map(getCardWithDefaults);
  }

  async addCard(phrase : string): Promise<Card[]> {
    const newCard: Card = {
      id: Date.now().toString(),
      phrase: phrase.trim(),
      createdAt: Date.now(),
    };
    const response = await this.service.addCard(newCard);
    return response.map(getCardWithDefaults);
  }

  async deleteCard(id : string): Promise<Card[]> {
    const res = await this.service.deleteCard(id);
    return res.map(getCardWithDefaults);
  }
}
