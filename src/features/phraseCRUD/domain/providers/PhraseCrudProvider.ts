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