export interface BlogPost {
  id: string;
  type: string;
  imageUrl: string;
  blogUrl: string;
  title: string;
  description: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    type: "Burçlar",
    imageUrl: "/images/blog/burclar.jpg",
    blogUrl: "/blog/burclar-ozellikleri-ve-etkileri",
    title: "Burçların Özellikleri ve Etkileri",
    description:
      "Burçlar, astrolojide doğum tarihlerine göre belirlenen 12 farklı gruba ayrılır. Her burcun kendine özgü özellikleri ve etkileri vardır. Bu yazıda, her burcun genel özelliklerini ve hayatımıza nasıl etki ettiğini keşfedeceğiz.",
    date: "24 Mart 2024",
  },
  {
    id: "2",
    type: "Burçlar",
    imageUrl: "/images/blog/burclar.jpg",
    blogUrl: "/blog/burclar-ozellikleri-ve-etkileri",
    title: "Burçların Özellikleri ve Etkileri",
    description:
      "Burçlar, astrolojide doğum tarihlerine göre belirlenen 12 farklı gruba ayrılır. Her burcun kendine özgü özellikleri ve etkileri vardır. Bu yazıda, her burcun genel özelliklerini ve hayatımıza nasıl etki ettiğini keşfedeceğiz.",
    date: "24 Mart 2024",
  },
  {
    id: "3",
    type: "Burçlar",
    imageUrl: "/images/blog/burclar.jpg",
    blogUrl: "/blog/burclar-ozellikleri-ve-etkileri",
    title: "Burçların Özellikleri ve Etkileri",
    description:
      "Burçlar, astrolojide doğum tarihlerine göre belirlenen 12 farklı gruba ayrılır. Her burcun kendine özgü özellikleri ve etkileri vardır. Bu yazıda, her burcun genel özelliklerini ve hayatımıza nasıl etki ettiğini keşfedeceğiz.",
    date: "24 Mart 2024",
  },
];
