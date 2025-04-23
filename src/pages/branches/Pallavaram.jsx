import { NavLink } from "react-router-dom"
export default function Pallavaram(){
    return (
        <div className="">
            <h1>WAVES SWIM ACADEMY PALLAVARAM</h1>
            <img src="/waves~pallavaram.webp" alt="" />
            <NavLink className='bg-blue-800 px-10 py-1 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110' to='/'>Back </NavLink>
        </div>
    )
}