"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, LogOut, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Genel Bakış", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Blog", href: "/admin/dashboard/blog", icon: BookOpen },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#F9F6F2] p-6">
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-2xl font-serif text-[#4A3B32]">Admin Panel</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} onClick={() => setOpen(false)}>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors overflow-hidden group",
                  isActive
                    ? "text-white bg-[#9C7A5B]"
                    : "text-[#6B5A4E] hover:bg-[#EAE1D3] hover:text-[#4A3B32]",
                )}>
                <item.icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-white" : "text-[#9C7A5B] group-hover:text-[#4A3B32]",
                  )}
                />
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#9C7A5B] rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-8 border-t border-[#E8E1D5]">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-[#6B5A4E] hover:bg-red-50 hover:text-red-600 transition-colors group">
          <LogOut className="w-5 h-5 text-[#9C7A5B] group-hover:text-red-600 transition-colors" />
          <span>Çıkış Yap</span>
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#F9F6F2] border-b border-[#E8E1D5] w-full fixed top-0 z-50">
        <span className="font-serif text-[#4A3B32] font-bold">Admin</span>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="p-2 cursor-pointer text-[#4A3B32] hover:bg-[#EAE1D3] rounded-md transition-colors lg:hidden">
            <Menu className="w-6 h-6" />
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-72 border-r-[#E8E1D5]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      <aside className="hidden lg:flex flex-col w-64 h-screen border-r border-[#E8E1D5] sticky top-0">
        <SidebarContent />
      </aside>
    </>
  );
}
