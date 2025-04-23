export default function VideoPlusText({ img, imgClass = "", text,videoHeight='h-full' }) {
    return (
      <div className="relative w-full h-[600px] sm:h-[600px] md:h-screen overflow-hidden">
        <video
          src={`/${img}`}
          className={`w-full ${videoHeight} object-cover ${imgClass}`}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          {/* <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4"> */
          /* {text}
          </h2> */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 drop-shadow-[8px_8px_16px_rgba(0,0,0,0.9)]">
            {text}
        </h2>
        </div>
      </div>
    );
  }
  