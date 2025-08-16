import { Card } from "@/domain/entities/Card";

export const CARDS_MOCK: Card[] = [
  {
    id: Date.now().toString(),
    phrase: "El viento se bambolea entre las ramas del viejo sauce",
    createdAt:Date.now()
  },
  {
    id: Date.now().toString(),
    phrase: "Dulzura si, pero con dientes",
    createdAt:Date.now()
  },
  {
    id: Date.now().toString(),
    phrase:
      "Parte de la adultez consiste en aprender a manejar los procesos de la vida",
      createdAt:Date.now()
  },
  {
    id: Date.now.toString(),
    phrase: "Taller de chapa y pintura",
    createdAt:Date.now()
  },
  {
    id: Date.now.toString(),
    phrase: "La vida te da todo si uno espera",
    createdAt:Date.now()
  },
];
