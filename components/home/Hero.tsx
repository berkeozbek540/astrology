"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center mb-12 md:mb-0">
        <motion.h1
          className="text-8xl leading-[1.2] mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          Evrenle <br />
          <span className="italic text-kahve">bağlan,</span> <br /> kendini bul
        </motion.h1>
        <motion.p
          className="text-kahve text-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}>
          Doğum haritanı keşfet, tarot kartlarının rehberliğine ulaş, <br></br> yıldızların sana ne
          söylediğini öğren.
        </motion.p>
        <motion.div
          className="flex md:flex-row flex-col items-center gap-4 mt-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}>
          <Link href="/burclar" className="bg-kahve text-white px-6 py-3 rounded-full w-max">
            Bugünkü yorumunu gör
          </Link>
          <Link href="/tarot" className="border-b border-kahve text-kahve pb-2">
            Geçmişini, bugününü ve geleceğini keşfet
          </Link>
        </motion.div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/Hero.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-auto "
        />
      </div>
    </div>
  );
};

export default Hero;
