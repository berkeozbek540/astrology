import { tarotCards } from "@/lib/tarot-data";

type TarotCard = (typeof tarotCards)[0];

export const shuffleTarotDeck = (array: TarotCard[]): TarotCard[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRandomReversed = (threshold = 0.3): boolean => {
  return Math.random() < threshold;
};
