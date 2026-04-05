"use client";
import { AnimatePresence } from "framer-motion";
import CardSelectionView from "@/components/tarot/CardSelectionView";
import RevealCardsView from "@/components/tarot/RevealCardsView";
import { useTarot } from "@/hooks/useTarot";
import PageTransition from "@/components/layout/PageTransition";

const TarotPage = () => {
  const {
    selectedCards,
    shuffledCards,
    isRevealed,
    handleCardClick,
    handleRevealClick,
    resetTarot,
  } = useTarot();

  if (shuffledCards.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <h2 className="text-4xl font-bold text-kahve">Deste karıştırılıyor...</h2>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto p-8 mb-8">
        <AnimatePresence mode="wait">
          {isRevealed ? (
            <RevealCardsView selectedCards={selectedCards} resetTarot={resetTarot} />
          ) : (
            <CardSelectionView
              shuffledCards={shuffledCards}
              selectedCards={selectedCards}
              handleCardClick={handleCardClick}
              handleRevealClick={handleRevealClick}
            />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default TarotPage;
