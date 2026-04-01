import { motion } from "framer-motion";
import Image from "next/image";
import { TarotCard, tarotCards } from "@/lib/tarot-data";

const labels = ["Geçmiş", "Şimdi", "Gelecek"];

interface CardSelectionViewProps {
  selectedCards: { card: TarotCard; isReversed: boolean }[];
}

const RevealCardsView = ({ selectedCards }: CardSelectionViewProps) => {
  return (
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
          const card = tarotCards.find((c) => c.id === selected.card.id);
          if (!card) return null;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
              className="flex flex-col items-center">
              <div className={`transition-transform duration-300 `}>
                <h2 className="text-center text-2xl text-koyu font-bold mb-4">{labels[index]}</h2>
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
                {selected.isReversed && (
                  <span className="text-lg text-grey-500 font-bold">(Ters)</span>
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
  );
};

export default RevealCardsView;
