import { CARDS_MOCK } from "../../constants/mocks";
import { PhraseCrudService } from "../interfaces/PhraseCrudService";

export class PhraseCrudServiceImpl implements PhraseCrudService {
  constructor() {}

  async getCards() {
    return CARDS_MOCK; // replace this with local storage
  }
}
