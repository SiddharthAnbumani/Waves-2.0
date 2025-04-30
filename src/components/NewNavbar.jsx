import { NavLink } from "react-router-dom";

export default function NewNavbar(){
    return (


        // <div className="sticky top-0 z-[9999] bg-[url('contact.jpg')] bg-black/30 backdrop-blur-3xl bg-cover bg-center h-16 flex items-center">
        <div className="sticky top-0 z-[9999] bg-[#041E42] bg-cover bg-center backdrop-blur-3xl h-16 flex items-center"> 
            <div className="w-4/12 flex justify-start items-center">
            <img src="/logo.PNG" alt="" className="h-14 ml-5"/>
                <NavLink to='/'><p className=" text-white font-extrabold text-sm mx-5">WAVES SWIM ACADEMY</p></NavLink>
            </div>
            
            <div className="w-1/12"></div>
            {/* <ul className=" w-6/12 font-bold text-lg flex justify-center space-x-8  text-white mx-5 font-[caudex]">  */}
            <ul className=" w-9/12 font-bold text-sm flex justify-center space-x-8  text-white mx-5 "> 
               
                <li className="transition-all duration-200 hover:border-b-2 border-white">
                    <NavLink 
                    to='/swimming-courses'
                    className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
                        PROGRAMS
                    </NavLink>
                </li>

                {/* <li>
                 <div className="relative group">
                    <NavLink 
                        to="/swimming-courses" 
                        className="text-white px-4 py-2 hover:bg-yellow-600 rounded-md"
                    >
                        Swimming Programs
                    </NavLink>

                    <div className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded-md shadow-lg z-10 min-w-[200px]">
                        <NavLink to="/services/swimming" className="px-4 py-2 hover:bg-gray-100">
                        Swimming Classes
                        </NavLink>
                        <NavLink to="/services/coaching" className="px-4 py-2 hover:bg-gray-100">
                        Personal Coaching
                        </NavLink>
                        <NavLink to="/services/events" className="px-4 py-2 hover:bg-gray-100">
                        Event Hosting
                        </NavLink>
                        <NavLink to="/services/events" className="px-4 py-2 hover:bg-gray-100">
                        Event Hosting
                        </NavLink>
                        <NavLink to="/services/events" className="px-4 py-2 hover:bg-gray-100">
                        Event Hosting
                        </NavLink>
                    </div>
                    </div>
                </li> */}
                    
                <li className="transition-all duration-200 hover:border-b-2 border-white">
                    <NavLink 
                    to='/competitive-swimming'
                    className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
                    RACING </NavLink>
                </li>
                {/* <li className="transition-all duration-200 hover:border-b-2 border-white">
                    <NavLink 
                    to='/aquaclub'
                    className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
                    AQUACLUB </NavLink>
                </li> */}
                <li className="transition-all duration-200 hover:border-b-2 border-white">
                    <NavLink 
                    to='/gallery'
                    className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
                    GALLERY</NavLink>
                </li>
                <li className="transition-all duration-200 hover:border-b-2 border-white">
                    <NavLink
                     to='/about-us'
                    className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
                     ABOUT</NavLink>
                </li>
                <li className="transition-all duration-200 hover:border-b-2 border-white">
                    <NavLink 
                    to='contact-us'
                    className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
                        CONTACT US
                    </NavLink>
                </li>
                
            </ul>
        </div>
    )
}