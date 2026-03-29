import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-5xl mx-auto mt-8 p-8 border border-altin/20 shadow-lg">
        <div className="flex items-center">
          <div className="rounded-full bg-krem p-8 border border-altin/20 ">
            <Image
              src={`/icons/zodiac/${slug}.svg`}
              alt={slug}
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          <div className="flex flex-col ml-8 gap-2">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-serif capitalize">{slug}</h1>
              <span className="bg-bej/40 px-4 py-1 rounded-full text-xs font-medium text-kahve uppercase tracking-wider">
                21 Mayıs - 20 Haziran
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="font-medium">Günlük Burç Yorumu</span>
              <span>·</span>
              <time dateTime="2026-03-29">29 Mart 2026</time>
            </div>
          </div>
        </div>
        <Separator />
        <p className="text-lg text-gray-700 ">
          Bugün, yıldızlar senin için özel bir mesaj taşıyor. İçsel gücünü keşfetmek ve yeni
          fırsatlara açık olmak için harika bir gün. İlişkilerinde samimi ve açık olman, seni daha
          da yakınlaştıracak. Kariyerinde ise yaratıcı fikirlerinle öne çıkabilirsin. Unutma, her
          zorluk yeni bir fırsat getirir. Yıldızlar seninle!
        </p>
        <h2 className="text-2xl">Genel Enerji</h2>
        <p className="text-lg text-gray-700 ">
          Bugün, enerjin yüksek ve motivasyonun güçlü olabilir. Yeni projelere başlamak için harika
          bir zaman. Ancak, aceleci kararlar vermekten kaçın ve her adımını dikkatlice planla.
          İlişkilerinde ise anlayışlı ve sabırlı olmak önemli olacak. Unutma, her zorluk yeni bir
          fırsat getirir. Yıldızlar seninle!
        </p>
        <h2 className="text-2xl">Aşk ve İlişkiler</h2>
        <p className="text-lg text-gray-700 ">
          Bugün, aşk hayatında yeni bir dönem başlayabilir. Samimi ve açık olman, ilişkilerini daha
          da güçlendirebilir. Dikkatli ol ve duygularını doğru şekilde ifade et. Yıldızlar seninle!
        </p>
        <h2 className="text-2xl">Kariyer ve Para</h2>
        <p className="text-lg text-gray-700 ">
          Bugün, kariyerinde ve mali durumunda önemli gelişmeler yaşanabilir. Yeni fırsatlarla
          karşılaşabilirsin. Dikkatli ve stratejik bir yaklaşım sergilemek, seni daha fazla
          ilerletir. Yıldızlar seninle!
        </p>
        <h2 className="text-2xl">Sağlık</h2>
        <p className="text-lg text-gray-700 ">
          Bugün, sağlık durumunda dikkatli olman gerekebilir. Yeterli dinlenme ve dengeli beslenme,
          seni daha iyi hissettirebilir. Yıldızlar seninle!
        </p>
        <h2 className="text-2xl">Günün tavsiyesi</h2>
        <p className="text-lg text-gray-700 ">
          Bugün, yıldızlar senin için özel bir mesaj taşıyor. İçsel gücünü keşfetmek ve yeni
          fırsatlara açık olmak için harika bir gün. İlişkilerinde samimi ve açık olman, seni daha
          da yakınlaştıracak. Kariyerinde ise yaratıcı fikirlerinle öne çıkabilirsin. Unutma, her
          zorluk yeni bir fırsat getirir. Yıldızlar seninle!
        </p>
        <Separator className="my-6" />
        <div className="flex justify-around gap-4">
          <div>
            <h2 className="text-lg text-toprak font-bold">Element</h2>
            <p className="text-gray-700 text-center">Hava</p>
          </div>
          <div>
            <h2 className="text-lg text-toprak font-bold">Yönetici Gezegen</h2>
            <p className="text-gray-700 text-center">Merkür</p>
          </div>
          <div>
            <h2 className="text-lg text-toprak font-bold">Uğurlu Sayı</h2>
            <p className="text-gray-700 text-center">5</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
