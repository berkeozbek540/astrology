import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { tarotCards } from "@/lib/tarot-data";

type TarotCard = (typeof tarotCards)[0];

interface CardSelectionViewProps {
  shuffledCards: TarotCard[];
  selectedCards: { card: TarotCard; isReversed: boolean }[];
  handleCardClick: (cardId: number) => void;
  handleRevealClick: () => void;
}

const CardSelectionView = ({
  shuffledCards,
  selectedCards,
  handleCardClick,
  handleRevealClick,
}: CardSelectionViewProps) => {
  return (
    <motion.div
      key="selection"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
      transition={{ duration: 0.4 }}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl pb-4">Tarot Rehberi</h1>
        <p className="text-lg text-gray-500">Geçmiş, Şimdi ve Gelecek için üç kart seç</p>
        <p className="text-gray-400">3 Kart Seç {selectedCards.length}/3</p>
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleRevealClick}
            disabled={selectedCards.length !== 3}
            className="text-2xl bg-kahve text-white py-6 px-3 rounded-lg shadow-lg hover:bg-koyu transition-colors duration-300 cursor-pointer">
            Kartları Çek
          </Button>
        </div>
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
              selectedCards.some((c) => c.card.id === card.id)
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
    </motion.div>
  );
};

export default CardSelectionView;
