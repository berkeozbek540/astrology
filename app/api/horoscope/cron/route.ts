import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { generateAllHoroscopes, ZODIAC_SIGNS } from "@/lib/gemini";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();
    const turkeyTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Istanbul" }));
    const today = new Date(turkeyTime.getFullYear(), turkeyTime.getMonth(), turkeyTime.getDate());

    const existingCount = await db.horoscope.count({
      where: { date: today },
    });

    if (existingCount >= 12) {
      return NextResponse.json({
        message: "Bugünün yorumları zaten mevcut",
        count: existingCount,
      });
    }

    const allHoroscopes = await generateAllHoroscopes();

    await db.horoscope.createMany({
      data: ZODIAC_SIGNS.map((sign) => ({
        sign,
        date: today,
        ...allHoroscopes[sign],
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({
      message: "12 burç yorumu başarıyla oluşturuldu",
      date: today,
    });
  } catch (error) {
    console.error("Cron job error:", error);
    return NextResponse.json({ error: "Cron job başarısız" }, { status: 500 });
  }
}
