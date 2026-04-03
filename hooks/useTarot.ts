import { useEffect, useState } from "react";
import { tarotCards } from "@/lib/tarot-data";
import { toast } from "sonner";
import { shuffleTarotDeck, getRandomReversed } from "@/utils/tarot-helper";

type TarotCard = (typeof tarotCards)[0];
type SelectedCard = {
  card: TarotCard;
  isReversed: boolean;
};

export const useTarot = () => {
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>([]);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const resetTarot = () => {
    setSelectedCards([]);
    setIsRevealed(false);
    setShuffledCards(shuffleTarotDeck(tarotCards));
  };

  useEffect(() => {
    setShuffledCards(shuffleTarotDeck(tarotCards));
  }, []);

  useEffect(() => {
    if (selectedCards.length < 3) {
      setIsRevealed(false);
    }
  }, [selectedCards]);

  const handleCardClick = (cardId: number) => {
    setSelectedCards((prev) => {
      const isAlreadySelected = prev.some((c) => c.card.id === cardId);

      if (!isAlreadySelected && prev.length >= 3) {
        toast.warning("Sadece 3 kart seçebilirsiniz.", {
          id: "max-cards-warning",
          position: "top-center",
        });
        return prev;
      }

      if (isAlreadySelected) {
        return prev.filter((c) => c.card.id !== cardId);
      }

      const card = tarotCards.find((c) => c.id === cardId);
      if (!card) return prev;

      return [
        ...prev,
        {
          card,
          isReversed: getRandomReversed(),
        },
      ];
    });
  };

  const handleRevealClick = () => {
    setIsRevealed(true);
  };
  return {
    selectedCards,
    shuffledCards,
    isRevealed,
    handleCardClick,
    handleRevealClick,
    resetTarot,
  };
};
