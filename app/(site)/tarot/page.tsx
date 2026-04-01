"use client";
import { Button } from "@/components/ui/button";
import { tarotCards } from "@/lib/tarot-data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type TarotCard = (typeof tarotCards)[0];

const page = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>([]);

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
    const isAlreadySelected = selectedCards.includes(cardId);

    if (!isAlreadySelected && selectedCards.length >= 3) {
      toast.warning("Sadece 3 kart seçebilirsiniz.", {
        position: "top-center",
        id: "max-cards-warning",
      });
      return;
    }

    setSelectedCards((prevSelected) => {
      if (isAlreadySelected) {
        return prevSelected.filter((id) => id !== cardId);
      }
      return [...prevSelected, cardId];
    });
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
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl pb-4">Tarot Rehberi</h1>
        <p className="text-lg text-gray-500">Geçmiş, Şimdi ve Gelecek için üç kart seç</p>
        <p className=" text-gray-400">3 Kart Seç {selectedCards.length}/3</p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-10 gap-4 py-8 ">
        {shuffledCards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
              selectedCards.includes(card.id) ? " scale-110 animate-pulse-gold" : ""
            }`}>
            <Image src="/tarotCards/tarotCardBack.jpg" alt="Tarot" width={200} height={300} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          disabled={selectedCards.length !== 3}
          className="text-2xl bg-bej text-kahve py-6 px-3 hover:cursor-pointer">
          Kartları Çek
        </Button>
      </div>
    </div>
  );
};

export default page;
