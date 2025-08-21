import { PhraseCrudServiceImpl, PhraseCrudClientImpl } from "@features/phraseCRUD/infrastructure";

const provideCrudPhraseClient = () => {
  const service = new PhraseCrudServiceImpl();
  return new PhraseCrudClientImpl(service);
};

export const provideCards = (query?:string) => {
  const client = provideCrudPhraseClient();
  return client.getCards(query);
};

export const provideAddCard = (phrase: string) => {
  const client = provideCrudPhraseClient();
  return client.addCard(phrase);
};

export const provideDeleteCard = (id: string) => {
  const client = provideCrudPhraseClient();
  return client.deleteCard(id);
};
