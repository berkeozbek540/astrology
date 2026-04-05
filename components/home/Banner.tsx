const Banner = () => {
  return (
    <div className="md:flex items-center justify-center gap-8 py-8 bg-bej md:h-20 my-20 border-b border-t border-kahve/40 md:mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div className="flex items-center justify-center gap-2 py-2 text-kahve font-semibold">
        <div className="w-1.5 h-1.5 bg-kahve rounded-full"></div>
        <span>3 Yıllık Deneyim</span>
      </div>
      <div className="flex items-center justify-center gap-2 py-2 text-kahve font-semibold">
        <div className="w-1.5 h-1.5 bg-kahve rounded-full"></div>
        <span>1000+ Mutlu Müşteri</span>
      </div>
      <div className="flex items-center justify-center gap-2 py-2 text-kahve font-semibold">
        <div className="w-1.5 h-1.5 bg-kahve rounded-full"></div>
        <span>Kişiye Özel Astroloji Danışmanlığı</span>
      </div>
      <div className="flex items-center justify-center gap-2 py-2 text-kahve font-semibold">
        <div className="w-1.5 h-1.5 bg-kahve rounded-full"></div>
        <span>Yıllık Doğum Haritası Analizi</span>
      </div>
    </div>
  );
};

export default Banner;
