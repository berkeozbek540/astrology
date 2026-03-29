import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { zodiacSigns } from "@/lib/zodiac-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getHoroscope } from "@/lib/horoscope";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const sections = [
  { key: "general", label: "Genel Enerji" },
  { key: "love", label: "Aşk ve İlişkiler" },
  { key: "career", label: "Kariyer ve Para" },
  { key: "health", label: "Sağlık" },
  { key: "advice", label: "Günün Tavsiyesi" },
] as const;

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const sign = zodiacSigns.find((s) => s.slug === slug);
  if (!sign) notFound();

  const horoscope = await getHoroscope(slug);
  if (!horoscope) notFound();

  const formattedDate = new Date(horoscope.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container mx-auto p-8">
      <Link
        href="/burclar"
        className="inline-flex items-center gap-2 text-sm text-kahve hover:text-koyu transition-colors duration-200 mb-4">
        <ChevronLeft className="w-4 h-4" />
        Tüm Burçlar
      </Link>
      <Card className="max-w-5xl mx-auto mt-8 p-8 border border-altin/20 shadow-lg">
        <div className="flex items-center gap-8">
          <div className="rounded-full bg-krem p-8 border border-altin/20 shrink-0">
            <Image
              src={sign.iconName}
              alt={sign.name}
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-4xl font-serif">{sign.name}</h1>
              <span className="bg-bej/40 px-4 py-1 rounded-full text-xs font-medium text-kahve uppercase tracking-wider">
                {sign.dates}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="font-medium">Günlük Burç Yorumu</span>
              <span>·</span>
              <time dateTime={horoscope.date.toISOString()}>{formattedDate}</time>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col gap-6">
          {sections.map(({ key, label }) => (
            <div key={key}>
              <h2 className="text-2xl mb-2">{label}</h2>
              <p className="text-lg text-gray-700">{horoscope[key]}</p>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="flex justify-around gap-4">
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-sm text-toprak font-bold uppercase tracking-wider">Element</h3>
            <p className="text-gray-700">
              {sign.element.charAt(0).toUpperCase() + sign.element.slice(1)}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-sm text-toprak font-bold uppercase tracking-wider">
              Yönetici Gezegen
            </h3>
            <p className="text-gray-700">{sign.planet}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-sm text-toprak font-bold uppercase tracking-wider">Uğurlu Sayı</h3>
            <p className="text-gray-700">{sign.luckyNumber}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
