"use client";
import { Sun, Book, Compass } from "lucide-react";
import { IconName, services } from "@/lib/services";
import { JSX } from "react/jsx-dev-runtime";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap: Record<IconName, JSX.Element> = {
  sun: (
    <Sun className="w-15 h-15 p-2 rounded-lg text-kahve shrink-0 group-hover:bg-kahve group-hover:text-white transition-colors duration-300" />
  ),
  book: (
    <Book className="w-15 h-15 p-2 rounded-lg text-kahve shrink-0 group-hover:bg-kahve group-hover:text-white transition-colors duration-300" />
  ),
  compass: (
    <Compass className="w-15 h-15 p-2 rounded-lg text-kahve shrink-0 group-hover:bg-kahve group-hover:text-white transition-colors duration-300" />
  ),
};

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between mt-16 gap-8 ">
      {services.map(({ id, title, description, iconName }) => (
        <Link key={id} href={`/${id}`}>
          <motion.div
            className="group bg-white rounded-xl p-8 hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}>
            {iconMap[iconName]}
            <h2 className="text-2xl font-bold mt-4 mb-2">{title}</h2>
            <p className="text-kahve">{description}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Services;
