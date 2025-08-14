import { Card } from "../typings/Card";

export interface PhraseCrudService {
    getCards(): Promise<Card[]>; // this should be an HTTP response or local storage response
  }
  