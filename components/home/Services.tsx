import { Sun, Book, Compass } from "lucide-react";
import { IconName, services } from "@/lib/services";
import { JSX } from "react/jsx-dev-runtime";
import Link from "next/link";

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
        <div
          key={id}
          className="group bg-white rounded-xl p-8 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
          <Link href={`/${id}`}>
            {iconMap[iconName]}
            <h2 className="text-2xl font-bold mt-4 mb-2">{title}</h2>
            <p className="text-kahve">{description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
