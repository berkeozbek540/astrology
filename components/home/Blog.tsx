"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="mt-32">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl italic">Blog</h2>
        <Link
          href="/blog"
          className="tracking-widest underline underline-offset-8 text-xl md:text-2xl hover:text-kahve transition-colors duration-300">
          Tüm Blog Yazıları
          <ChevronRight className="inline-block" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 ">
        {blogPosts.map(({ id, type, date, imageUrl, title, description, blogUrl }) => (
          <Link key={id} href={blogUrl} className="w-full md:w-1/3">
            <motion.div className="relative bg-white rounded-xl p-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image src="/hero.svg" alt={title} width={200} height={200} className="rounded-lg" />
              <span className="bg-kahve rounded-xl absolute top-4 left-4 text-sm text-bej px-2 py-1">
                {type}
              </span>
              <span className="text-gray-500 text-xs">{date}</span>
              <h3 className="text-xl font-semibold mt-4">{title}</h3>
              <p className="text-sm text-gray-600 my-2 line-clamp-3">{description}</p>
              <span className="text-kahve ">
                Devamını Oku
                <ChevronRight className="inline-block" />
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
