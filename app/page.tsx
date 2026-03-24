"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="bg-krem min-h-screen p-8 flex flex-col items-center">
      <Image
        src="/logos/logo.svg"
        alt="Ruhunun Rehberi Logo"
        width={1000}
        height={1000}
        className="mb-6"
      />
      {/* Üst Küçük Başlık (Inter) */}
      <span className="font-sans text-toprak tracking-[0.2em] uppercase text-xs mb-4">
        › Ruhunun Rehberi
      </span>
      <motion.div animate={{ rotate: 360 }} className="w-20 h-20 bg-primary rounded-lg" />
      {/* Ana Başlık (Playfair Display) */}
      <h1 className="font-serif text-5xl md:text-7xl text-koyu leading-tight mb-8">
        Evrenle <br /> bağlan
      </h1>

      {/* Açıklama Metni (Inter) */}
      <p className="font-sans text-kahve max-w-md text-center leading-relaxed">
        Tarot, astroloji ve ritüellerle iç dünyanı keşfet. Kişisel, sıcak ve davetkar bir yolculuğa
        hazır mısın?
      </p>

      {/* Buton Örneği */}
      <button className="mt-10 px-8 py-3 bg-koyu text-krem font-sans rounded-full hover:bg-kahve transition-all shadow-md">
        Seans Al
      </button>
    </section>
  );
}
