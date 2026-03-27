import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { generateAllHoroscopes, ZODIAC_SIGNS, ZodiacSign } from "@/lib/gemini";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sign = searchParams.get("sign") as ZodiacSign;

    if (!sign || !ZODIAC_SIGNS.includes(sign)) {
      return NextResponse.json(
        { error: "Geçersiz burç. Örnek: /api/horoscope?sign=koc" },
        { status: 400 },
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existing = await db.horoscope.findFirst({
      where: {
        sign,
        date: today,
      },
    });

    if (existing) {
      return NextResponse.json({
        sign: existing.sign,
        content: existing.content,
        date: existing.date,
        source: "cache",
      });
    }

    const allHoroscopes = await generateAllHoroscopes();

    await db.horoscope.createMany({
      data: ZODIAC_SIGNS.map((s) => ({
        sign: s,
        date: today,
        content: allHoroscopes[s],
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({
      sign,
      content: allHoroscopes[sign],
      date: today,
      source: "gemini",
    });
  } catch (error) {
    console.error("Horoscope API error:", error);
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
