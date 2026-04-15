"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen } from "lucide-react";

type Post = {
  id: number;
  category: string;
  coverImage: string | null;
  title: string;
  slug: string;
  description: string;
  content: string;
  published: boolean;
  createdAt: Date;
};

const BlogCardGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-[32px] overflow-hidden border border-[#C5A059]/10 shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#F1F1F1]">
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <BookOpen size={48} strokeWidth={1} className="text-[#9C9C9C]" />
                </div>
              )}
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em] bg-[#C5A059]/5 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-[11px] text-[#A6998E] font-medium">
                  {new Date(post.createdAt).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="font-serif text-[22px] text-[#2B1F16] mb-4 leading-tight group-hover:text-[#C5A059] transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-[#6F6F6F] text-[14px] leading-relaxed mb-8 line-clamp-3 italic opacity-90">
                {post.description}
              </p>
              <div className="mt-auto pt-4 border-t border-[#F1F1F1]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[12px] font-bold text-[#4A3728] uppercase tracking-widest group/link">
                  <span className="border-b border-transparent group-hover/link:border-[#C5A059] group-hover/link:text-[#C5A059] transition-all">
                    Devamını Oku
                  </span>
                  <span className="text-[#C5A059] transition-transform group-hover/link:translate-x-1 underline-none">
                    &gt;
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogCardGrid;
