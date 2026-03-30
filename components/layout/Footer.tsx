import Link from "next/link";
import { links } from "@/lib/nav-links";
import Image from "next/image";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-kahve">
      <div className="bg-kahve container mx-auto p-8">
        <div className="md:flex justify-between md:py-8">
          <div className="max-w-xs pb-8 md:pb-0">
            <Image
              src="/logos/logoWhite.svg"
              alt="Astrolog Melis Tezcan"
              width={200}
              height={50}
              priority
            />
            <p className="text-bej mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis
              impedit ullam exercitationem tempore dolores amet voluptatum eveniet voluptates porro!
            </p>
          </div>
          <div className="pb-8 md:pb-0">
            <h2 className="text-bej text-2xl mb-2">Hızlı Menü</h2>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm block py-1 text-bej hover:text-koyu transition-colors duration-300">
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="text-bej text-2xl">İletişim</h2>
            <p className="text-bej">demo@gmail.com</p>

            <Link href="https://www.instagram.com/astrolog.melistezcan/" target="_blank">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="mt-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
