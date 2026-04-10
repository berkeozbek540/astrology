import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { title, description, content, category, coverImage, published } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Başlık ve içerik zorunlu" }, { status: 400 });
    }

    const slug = generateSlug(title);

    const post = await db.post.create({
      data: {
        title,
        slug,
        description,
        content,
        category,
        coverImage,
        published: published ?? false,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Post oluşturma hatası:", error);
    return NextResponse.json({ error: "Yazı oluşturulamadı" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, title, description, content, category, coverImage, published } =
      await request.json();

    const post = await db.post.update({
      where: { id },
      data: {
        title,
        slug: generateSlug(title),
        description,
        content,
        category,
        coverImage,
        published,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Post güncelleme hatası:", error);
    return NextResponse.json({ error: "Yazı güncellenemedi" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await request.json();

    await db.post.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Post silme hatası:", error);
    return NextResponse.json({ error: "Yazı silinemedi" }, { status: 500 });
  }
}
