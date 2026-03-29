import { zodiacSigns } from "@/lib/zodiac-data";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl pb-4">Burcunu Seç</h1>
        <p className="text-lg text-gray-500">Yıldızların senin için bugünkü mesajını öğren.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
        {zodiacSigns.map((sign) => (
          <Link
            href={`/burclar/${sign.slug}`}
            key={sign.id}
            className="group flex flex-col items-center p-4 bg-white/50 rounded-xl shadow-md hover:shadow-lg border hover:border-kahve transition-all duration-300 cursor-pointer">
            <Image
              src={sign.iconName}
              alt={sign.name}
              width={64}
              height={64}
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm mt-4 transform transition-transform duration-300 ">
              {sign.name}
            </span>
            <span className="text-xs text-gray-500 mt-2">{sign.dates}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
