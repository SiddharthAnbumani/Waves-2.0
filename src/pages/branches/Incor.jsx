import { NavLink } from "react-router-dom";

export default function Incor(){
    return (
        <div className="">
            <h1>WAVES SWIM ACADEMY INCOR</h1>
            <img src="/waves~incor.jpg" alt="" />
            <NavLink className='bg-blue-800 px-10 py-1 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110' to='/'>Back </NavLink>
        </div>
    )
}