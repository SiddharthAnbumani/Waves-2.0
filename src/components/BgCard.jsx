import { NavLink } from "react-router-dom"

export default function BgCard({nav,text,btnClass, btnText}){
    return (
        // <div className="h-screen w-screen flex justify-center items-center">
        <div className="relative h-110 w-80 rounded-3xl">
            <img src="/contact.jpg" alt="" className="absolute h-full object-cover rounded-3xl" />
            <div className="absolute h-full w-full backdrop-blur-lg bg-black/30 rounded-3xl flex justify-center items-center">
                <div className="text-white  w-[90%] h-[90%] flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-2xl my-10">{text}</h1>
                <img src="/racing.avif" alt=""  className="h-40 rounded-xl"/>
            <NavLink className={`${btnClass} my-10 bg-white px-15 py-2 text-lg font-bold text-[#041E42] rounded-md transform transform-all duration-150 hover:scale-110`} to={nav}>View Images</NavLink>
                </div>
            </div>

        </div>
        // </div>
    )
}