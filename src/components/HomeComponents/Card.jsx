import { NavLink } from "react-router-dom";

export default function Card({title,nav='/',content,img= '/profile.avif',btnText='click me', btnClass='bg-blue-700',height='h-110',width='x-75'}){
    return (
        <div className={ `bg-gray-100 border-4 border-[#041E42] text-[#041E42] backdrop-blur-3xl  ${height} ${width} rounded-lg shadow-2xl flex flex-col justify-center items-center space-y-3 p-3`}>
            <img src={`${img}`} alt="" className="h-30 my-5 rounded-md" />
            <p className="text-xl font-bold px-2">
                {title}
            </p>
            <p className="text-sm font-light text-justify px-4">
                {content}
            </p>
            <NavLink className={`${btnClass} px-14 py-2 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110`} to={nav}>{btnText}</NavLink>
        </div>
    ) 
}