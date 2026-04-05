import { Sun, Book, Compass } from "lucide-react";
import { IconName, services } from "@/lib/services";
import { JSX } from "react/jsx-dev-runtime";
import Link from "next/link";

const iconMap: Record<IconName, JSX.Element> = {
  sun: <Sun className="w-10 h-10 text-kahve shrink-0" />,
  book: <Book className="w-10 h-10 text-kahve shrink-0" />,
  compass: <Compass className="w-10 h-10 text-kahve shrink-0" />,
};

const Services = () => {
  return (
    <div className="flex justify-between mt-16 gap-8 ">
      {services.map(({ id, title, description, iconName }) => (
        <div
          key={id}
          className="bg-white rounded-xl p-8 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
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
