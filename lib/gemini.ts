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

export async function generateAllHoroscopes(): Promise<Record<ZodiacSign, string>> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const today = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const prompt = `
Bugün ${today}. Türkçe olarak 12 burç için günlük astroloji yorumu yaz.
Her yorum 3-4 cümle olsun. Aşk, kariyer ve genel enerji hakkında konuş.
Samimi, gizemli ve ilham verici bir dil kullan.

SADECE aşağıdaki JSON formatında döndür, başka hiçbir şey yazma, markdown kullanma:
{
  "koc": "...",
  "boga": "...",
  "ikizler": "...",
  "yengec": "...",
  "aslan": "...",
  "basak": "...",
  "terazi": "...",
  "akrep": "...",
  "yay": "...",
  "oglak": "...",
  "kova": "...",
  "balik": "..."
}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const cleaned = text.replace(/```json|```/g, "").trim();

  const horoscopes = JSON.parse(cleaned) as Record<ZodiacSign, string>;
  return horoscopes;
}
