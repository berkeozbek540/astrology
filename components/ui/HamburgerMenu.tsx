"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { links } from "@/lib/nav-links";

export function HamburgerMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen(!open)}>
        <Menu className="h-6 w-6 text-koyu" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-4 w-48 rounded-md bg-white shadow-lg border">
            <ul className="py-2">
              {links.map(({ href, label }) => {
                const isActive = pathname === href || pathname.startsWith(href + "/");

                return (
                  <li key={href} className="relative">
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        isActive ? "text-koyu" : "text-zinc-600 hover:text-koyu"
                      }`}>
                      {label}

                      {isActive && (
                        <motion.div
                          layoutId="underline-mobile"
                          className="absolute left-2 inset-y-0 w-1 h-[1.5em] my-auto bg-koyu rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
