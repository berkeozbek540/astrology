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
      where: { sign, date: today },
    });

    if (existing) {
      return NextResponse.json({
        sign: existing.sign,
        date: existing.date,
        source: "cache",
        content: {
          general: existing.general,
          love: existing.love,
          career: existing.career,
          health: existing.health,
          advice: existing.advice,
        },
      });
    }

    const allHoroscopes = await generateAllHoroscopes();

    await db.horoscope.createMany({
      data: ZODIAC_SIGNS.map((s) => ({
        sign: s,
        date: today,
        general: allHoroscopes[s].general,
        love: allHoroscopes[s].love,
        career: allHoroscopes[s].career,
        health: allHoroscopes[s].health,
        advice: allHoroscopes[s].advice,
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({
      sign,
      date: today,
      source: "gemini",
      content: allHoroscopes[sign],
    });
  } catch (error) {
    console.error("Horoscope API error:", error);
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
