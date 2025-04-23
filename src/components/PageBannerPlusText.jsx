export default function PageBannerPlusText({text,img,imgClass,bannerHeight = 'h-50', bg='bg-black/40', textSize='text-3xl'}) {
    return (
      <div className="relative w-full">
        <img src={`/${img}`} className={`w-full object-cover ${imgClass} ${bannerHeight} `}/>
        <div className={`${bg} absolute inset-0 flex items-center justify-center`}>
          <h2 className={`text-white ${textSize} font-bold`}>{text}</h2>
        </div>
      </div>
    );
  }
  