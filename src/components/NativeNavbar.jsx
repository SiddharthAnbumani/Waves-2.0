import { NavLink } from "react-router-dom"

export default function NativeNavbar(){
    return (
        <div className="flex flex-col">
             <div className="w-screen bg-blue-600 h-8 flex justify-end items-center">
                <div className="w-full text-white font-extrabold text-lg font-[alike-angular]">Waves Swim Academy</div>
            </div>
            {/* <div className="bg-blue-50 h-12 w-full flex ">
                <div className="mx-3 w-2/12">
                    <NavLink to='/'>
                        <img src="/icon.jpeg" alt="" className="rounded-4xl h-12"/>
                    </NavLink>
                </div>
                <ul className="text-black font-bold text-lg flex justify-start items-center w-8/12 space-x-10">
                    <li>
                        <NavLink className='text-black' to='/about-us'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/swimming-courses'>Swimming Courses </NavLink>
                    </li>
                    <li>
                        <NavLink to='/competitive-swimming'>competetive level </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to='contact-us'> Contact Us</NavLink>
                    </li>
                </ul>
                <div className="w-2/12">

                </div>
            </div> */}
        </div>
    )
}