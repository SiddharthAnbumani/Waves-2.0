import { NavLink } from "react-router-dom";

export default function Card({title,nav='/',content,img= '/profile.avif',btnText='click me', btnClass='bg-blue-700',height='h-110',width='x-75'}){
    return (
        <div className={`bg-black/60 backdrop-blur-lg  ${height} ${width} rounded-md flex flex-col justify-center items-center space-y-3 p-3`}>
            <img src={`${img}`} alt="" className="h-30 my-5 rounded-md" />
            <p className="text-xl font-bold px-2">
                {title}
            </p>
            <p className="text-sm font-light text-center px-2">
                {content}
            </p>
            <NavLink className={`${btnClass} px-14 py-2 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110`} to={nav}>{btnText}</NavLink>
        </div>
    ) 
}