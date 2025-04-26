import { NavLink } from "react-router-dom"

export default function HorizontalInfoBanner({navLink='/',title,subHeading,titleColor='text-red-600',subColor='text-white',text,img,bannerHeight='h-68', color='bg-black/90 backdrop-blur-3xl', btnBgTextColor='bg-blue-700 text-white',btnText='enter text',border='border-2' }){
    return (
        <div className="w-screen flex flex-col items-center">
              <div className= {`${color} w-[80%] rounded-xl ${bannerHeight} flex items-center space-x-4 hover:scale-104 transition-all duration-500 px-10 py-10`}>
              <div className="w-3/12 flex flex-col items-center justify-center">
              <p className={`${titleColor} text-2xl text-center font-extrabold`}>{title}</p>
             {subHeading && <p className={`${subColor} text-lg text-center font-bold mb-2`}>{subHeading}</p>}
                <img src={img} alt="" className="h-40 rounded-lg" />
              </div>
                <div className={`w-9/12 ${border} flex flex-col items-center space-y-4 py-5`}>
                  <p className="text-lg font-light text-center">{text}</p>
                     <NavLink className={`${btnBgTextColor} px-14 py-2 text-lg font-bold  rounded-md transform transform-all duration-150 hover:scale-110`}  to={navLink}>{btnText}</NavLink>
                </div>
              </div>
            </div>
    )
}