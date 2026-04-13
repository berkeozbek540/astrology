"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight, Sparkles, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-24 px-4 md:max-w-7xl max-w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-16 shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden relative">
        <div className="flex flex-col justify-center space-y-8 z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white leading-tight">
              Sorularınız için <br /> <span className="italic text-altin">buradayız</span>
            </h2>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-md">
              Yıldızların rehberliğinde bir yolculuğa çıkmak veya seans randevusu almak için bize
              ulaşabilirsiniz.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/iletisim"
              className="flex items-center gap-2 bg-altin text-white px-6 py-3 rounded-full hover:bg-altin/90 transition-all shadow-lg shadow-altin/20 group">
              <Calendar size={18} />
              <span className="font-medium">Randevu Al</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 z-10">
          <a
            href="mailto:info@astrologmelis.com"
            className="group flex items-center justify-between p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-transparent hover:border-altin/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="text-altin" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100">E-posta Gönder</h4>
                <p className="text-sm text-zinc-500">info@astrologmelis.com</p>
              </div>
            </div>
            <ArrowRight
              className="text-zinc-300 group-hover:text-altin group-hover:translate-x-1 transition-all"
              size={20}
            />
          </a>
          <a
            href="https://wa.me/905545153251"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-transparent hover:border-altin/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                <MessageSquare className="text-altin" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100">WhatsApp Hattı</h4>
                <p className="text-sm text-zinc-500">Hızlıca mesaj bırakın</p>
              </div>
            </div>
            <ArrowRight
              className="text-zinc-300 group-hover:text-altin group-hover:translate-x-1 transition-all"
              size={20}
            />
          </a>
          <div className="p-6 bg-altin/10 border border-altin/20 rounded-2xl">
            <h4 className="font-bold text-altin flex items-center gap-2">
              <Sparkles size={18} /> Popüler Seanslar
            </h4>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Doğum Haritası</li>
              <li>• İlişki Analizi (Sinastri)</li>
              <li>• Yıllık Öngörü</li>
              <li>• Tarot Danışmanlığı</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
