"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/dist/client/components/navigation";

export const revalidate = 3600;

type Post = {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  coverImage: string;
  createdAt: Date;
};

const Blog = ({ posts }: { posts: Post[] }) => {
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
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {posts.map((post) => {
          const imageUrl = post.coverImage
            ? `${post.coverImage}?width=500&height=300`
            : "/default-placeholder.png";

          return (
            <Link key={post.id} href={`/blog/${post.slug}`} className="w-full md:w-1/3">
              <motion.div className="relative bg-white rounded-xl p-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="rounded-lg object-cover"
                    unoptimized
                  />
                </div>
                <span className="bg-kahve rounded-xl absolute top-4 left-4 text-sm text-bej px-2 py-1">
                  {post.category}
                </span>
                <span className="text-gray-500 text-xs">
                  {new Date(post.createdAt).toLocaleDateString("tr-TR")}
                </span>
                <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
                <p className="text-sm text-gray-600 my-2 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                <div className="text-kahve mt-4">
                  Devamını Oku
                  <ChevronRight className="inline-block" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Blog;
