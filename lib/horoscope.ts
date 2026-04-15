import { generateAllHoroscopes, ZODIAC_SIGNS } from "@/lib/gemini";
import { db } from "@/lib/db";

export async function getHoroscope(slug: string) {
  const now = new Date();
  const turkeyTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Istanbul" }));

  const todayStart = new Date(
    Date.UTC(turkeyTime.getFullYear(), turkeyTime.getMonth(), turkeyTime.getDate(), 0, 0, 0, 0),
  );
  const todayEnd = new Date(
    Date.UTC(
      turkeyTime.getFullYear(),
      turkeyTime.getMonth(),
      turkeyTime.getDate(),
      23,
      59,
      59,
      999,
    ),
  );

  const existing = await db.horoscope.findFirst({
    where: {
      sign: slug,
      date: { gte: todayStart, lte: todayEnd },
    },
  });

  if (existing) return existing;

  try {
    const allHoroscopes = await generateAllHoroscopes();

    await db.horoscope.createMany({
      data: ZODIAC_SIGNS.map((s) => ({
        sign: s,
        date: todayStart, // ← todayStart kullan
        general: allHoroscopes[s].general,
        love: allHoroscopes[s].love,
        career: allHoroscopes[s].career,
        health: allHoroscopes[s].health,
        advice: allHoroscopes[s].advice,
      })),
      skipDuplicates: true,
    });

    const h = allHoroscopes[slug as keyof typeof allHoroscopes];
    return {
      sign: slug,
      date: todayStart,
      general: h.general,
      love: h.love,
      career: h.career,
      health: h.health,
      advice: h.advice,
    };
  } catch (error) {
    console.error("Horoscope oluşturma hatası:", error);
    return null;
  }
}
