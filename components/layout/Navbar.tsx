"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import { HamburgerMenu } from "../ui/HamburgerMenu";
import { links } from "@/lib/nav-links";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-altin/30">
      <div className="container mx-auto p-8 flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="/logos/logo.svg"
              alt="Astrolog Melis Tezcan"
              width={200}
              height={50}
              priority
            />
          </Link>
        </div>
        <LayoutGroup id="navbar-underline">
          <div className="hidden md:flex gap-8 items-center h-12 relative">
            {links.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative py-3 font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isActive ? "text-koyu" : "text-zinc-600 hover:text-koyu"
                  }`}>
                  {label}

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-koyu rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </LayoutGroup>
        <div className="md:hidden flex items-center justify-end">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
