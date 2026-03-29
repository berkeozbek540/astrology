import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const ZODIAC_SIGNS = [
  "koc",
  "boga",
  "ikizler",
  "yengec",
  "aslan",
  "basak",
  "terazi",
  "akrep",
  "yay",
  "oglak",
  "kova",
  "balik",
] as const;

export type ZodiacSign = (typeof ZODIAC_SIGNS)[number];

export interface HoroscopeContent {
  general: string;
  love: string;
  career: string;
  health: string;
  advice: string;
}

export async function generateAllHoroscopes(): Promise<Record<ZodiacSign, HoroscopeContent>> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const today = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const prompt = `
Bugün ${today}. Türkçe olarak 12 burç için günlük astroloji yorumu yaz.
Her bölüm 2-3 cümle olsun. Samimi, gizemli ve ilham verici bir dil kullan.

SADECE aşağıdaki JSON formatında döndür, başka hiçbir şey yazma, markdown kullanma:
{
  "koc": {
    "general": "Genel enerji yorumu...",
    "love": "Aşk ve ilişkiler yorumu...",
    "career": "Kariyer ve para yorumu...",
    "health": "Sağlık yorumu...",
    "advice": "Günün tavsiyesi..."
  },
  "boga": {
    "general": "...",
    "love": "...",
    "career": "...",
    "health": "...",
    "advice": "..."
  },
  "ikizler": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "yengec": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "aslan": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "basak": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "terazi": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "akrep": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "yay": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "oglak": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "kova": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." },
  "balik": { "general": "...", "love": "...", "career": "...", "health": "...", "advice": "..." }
}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const cleaned = text.replace(/```json|```/g, "").trim();

  const horoscopes = JSON.parse(cleaned) as Record<ZodiacSign, HoroscopeContent>;
  return horoscopes;
}
