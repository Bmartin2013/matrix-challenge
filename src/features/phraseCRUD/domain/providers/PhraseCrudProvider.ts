import { PhraseCrudClient } from "../clients/PhraseCrudClient";
import { PhraseCrudServiceImpl } from "../services/PhraseCrudServiceImpl";

const provideCrudPhraseClient = () => {
  const service = new PhraseCrudServiceImpl();
  return new PhraseCrudClient(service);
};

export const provideCards = () => {
  const client = provideCrudPhraseClient();
  return client.getCards();
};

export const provideAddCard = (phrase: string) => {
  const client = provideCrudPhraseClient();
  return client.addCard(phrase);
};

export const provideDeleteCard = (id: string) => {
  const client = provideCrudPhraseClient();
  return client.deleteCard(id);
};
