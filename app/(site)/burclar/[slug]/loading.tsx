const Loading = () => {
  return (
    <div className="container mx-auto p-8 min-h-screen">
      <div className="max-w-5xl mx-auto mt-8 flex flex-col items-center justify-center gap-6 py-32 ">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-bej/20 border-t-altin animate-swirl-slow shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-gray-950" />
          <svg
            className="w-10 h-10 text-altin animate-pulse-gold"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.6 8.4L23 11L14.6 13.6L12 22L9.4 13.6L1 11L9.4 8.4L12 0Z" />
          </svg>
        </div>
        <p className="text-kahve text-sm font-light tracking-wide">
          Yıldızlar senin için okunuyor...
        </p>
      </div>
    </div>
  );
};

export default Loading;
