"use client";
import { Button } from "@/components/ui/button";
import { tarotCards } from "@/lib/tarot-data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

type TarotCard = (typeof tarotCards)[0];
const labels = ["Geçmiş", "Şimdi", "Gelecek"];

const page = () => {
  const [selectedCards, setSelectedCards] = useState<{ id: number; isReversed: boolean }[]>([]);
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>([]);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  useEffect(() => {
    const shuffleArray = (array: TarotCard[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledCards(shuffleArray(tarotCards));
  }, []);

  const handleCardClick = (cardId: number) => {
    const isAlreadySelected = selectedCards.some((c) => c.id === cardId);

    if (!isAlreadySelected && selectedCards.length >= 3) {
      toast.warning("Sadece 3 kart seçebilirsiniz.", {
        id: "max-cards-warning",
        position: "top-center",
      });
      return;
    }
    const isReversed = Math.random() < 0.3;

    setSelectedCards((prev) => {
      if (isAlreadySelected) {
        return prev.filter((c) => c.id !== cardId);
      }
      return [...prev, { id: cardId, isReversed }];
    });
  };

  const handleRevealClick = () => {
    setIsRevealed(true);
  };

  if (shuffledCards.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <h2 className="text-4xl font-bold text-kahve">Deste karıştırılıyor...</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 mb-8">
      <AnimatePresence mode="wait">
        {isRevealed ? (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-kahve mb-4">Seçilen Kartlar</h2>
            </div>
            <div className="md:grid md:grid-cols-3 gap-8">
              {selectedCards.map((selected, index) => {
                const card = tarotCards.find((c) => c.id === selected.id);
                if (!card) return null;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="flex flex-col items-center">
                    <div className={`transition-transform duration-300 `}>
                      <h2 className="text-center text-2xl text-koyu font-bold mb-4">
                        {labels[index]}
                      </h2>
                      <Image
                        src={card.image}
                        alt={card.name}
                        width={200}
                        height={300}
                        className={`rounded-lg shadow-2xl ${selected.isReversed ? "rotate-180" : ""}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-kahve mt-4">{card.name}</h3>
                    <div className="h-6 flex items-center justify-center">
                      {selected.isReversed ? (
                        <span className="text-lg text-grey-500 font-bold">(Ters)</span>
                      ) : (
                        <span className="invisible text-lg font-bold">(Düz)</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-center py-2">
                      {selected.isReversed ? card.meaningReversed : card.meaningUpright}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-gray-500 text-center py-8">
              Bu kartların senin hayatına özel derinlemesine yorumunu almak ister misin?
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="selection"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            transition={{ duration: 0.4 }}>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl pb-4">Tarot Rehberi</h1>
              <p className="text-lg text-gray-500">Geçmiş, Şimdi ve Gelecek için üç kart seç</p>
              <p className="text-gray-400">3 Kart Seç {selectedCards.length}/3</p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-10 gap-4 py-8 ">
              {shuffledCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.3,
                  }}
                  onClick={() => handleCardClick(card.id)}
                  className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
                    selectedCards.some((c) => c.id === card.id)
                      ? " scale-110 animate-pulse-gold"
                      : ""
                  }`}>
                  <Image
                    src="/tarotCards/tarotCardBack.jpg"
                    alt="Tarot"
                    width={200}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleRevealClick}
                disabled={selectedCards.length !== 3}
                className="text-2xl bg-bej text-kahve py-6 px-3 hover:cursor-pointer">
                Kartları Çek
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default page;
