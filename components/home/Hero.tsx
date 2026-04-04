import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-8">
      <div className="flex flex-col mb-12 md:mb-0">
        <span className="text-2xl text-kahve mb-12">Günlük Rehberin</span>
        <h1 className="text-8xl leading-[1.2] mb-8">
          Evrenle <br />
          <span className="italic text-kahve">bağlan,</span> <br /> kendini bul
        </h1>
        <p className="text-kahve text-lg">
          Doğum haritanı keşfet, tarot kartlarının rehberliğine ulaş, yıldızların sana ne
          söylediğini öğren.
        </p>
        <div className="flex md:flex-row flex-col items-center gap-4 mt-8">
          <Link href="/astroloji" className="bg-kahve text-white px-6 py-3 rounded-full w-max">
            Bugünkü yorumunu gör
          </Link>
          <Link href="/burclar" className="border-b border-kahve text-kahve pb-2">
            Geçmişini, bugününü ve geleceğini keşfet
          </Link>
        </div>
      </div>
      <div>
        {" "}
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
