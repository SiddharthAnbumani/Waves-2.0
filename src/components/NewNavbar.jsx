import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can replace with any icon library

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "PROGRAMS", path: "/swimming-courses" },
    { name: "RACING", path: "/competitive-swimming" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT", path: "/about-us" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-[9999] bg-[#041E42] h-16 flex items-center px-4 md:px-8 justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.PNG" alt="Logo" className="h-12" />
          <NavLink to="/" className="text-white font-extrabold text-sm">
            WAVES SWIM ACADEMY
          </NavLink>
        </div>

        {/* Right: Nav links for md and up */}
        <ul className="hidden md:flex space-x-8 text-white text-sm font-bold">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 border-white"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button for mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay (when mobile menu is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 text-[#041E42] z-[1000] p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="mt-8 space-y-6 text-sm font-bold">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block border-b-2 border-[#041E42] md:border-white "
                  : "block hover:border-b-2 border-white"
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}



// import { NavLink } from "react-router-dom";

// export default function NewNavbar(){
//     return (


//         // <div className="sticky top-0 z-[9999] bg-[url('contact.jpg')] bg-black/30 backdrop-blur-3xl bg-cover bg-center h-16 flex items-center">
//         <div className="sticky top-0 z-[9999] bg-[#041E42] bg-cover bg-center backdrop-blur-3xl h-16 flex items-center"> 
//             <div className="w-4/12 flex justify-start items-center">
//             <img src="/logo.PNG" alt="" className="h-14 ml-5"/>
//                 <NavLink to='/'><p className=" text-white font-extrabold text-sm mx-5">WAVES SWIM ACADEMY</p></NavLink>
//             </div>
            
//             <div className="w-1/12"></div>
//             {/* <ul className=" w-6/12 font-bold text-lg flex justify-center space-x-8  text-white mx-5 font-[caudex]">  */}
//             <ul className=" w-9/12 font-bold text-sm flex justify-center space-x-8  text-white mx-5 "> 
               
//                 <li className="transition-all duration-200 hover:border-b-2 border-white">
//                     <NavLink 
//                     to='/swimming-courses'
//                     className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
//                         PROGRAMS
//                     </NavLink>
//                 </li>

//                 {/* <li>
//                  <div className="relative group">
//                     <NavLink 
//                         to="/swimming-courses" 
//                         className="text-white px-4 py-2 hover:bg-yellow-600 rounded-md"
//                     >
//                         Swimming Programs
//                     </NavLink>

//                     <div className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded-md shadow-lg z-10 min-w-[200px]">
//                         <NavLink to="/services/swimming" className="px-4 py-2 hover:bg-gray-100">
//                         Swimming Classes
//                         </NavLink>
//                         <NavLink to="/services/coaching" className="px-4 py-2 hover:bg-gray-100">
//                         Personal Coaching
//                         </NavLink>
//                         <NavLink to="/services/events" className="px-4 py-2 hover:bg-gray-100">
//                         Event Hosting
//                         </NavLink>
//                         <NavLink to="/services/events" className="px-4 py-2 hover:bg-gray-100">
//                         Event Hosting
//                         </NavLink>
//                         <NavLink to="/services/events" className="px-4 py-2 hover:bg-gray-100">
//                         Event Hosting
//                         </NavLink>
//                     </div>
//                     </div>
//                 </li> */}
                    
//                 <li className="transition-all duration-200 hover:border-b-2 border-white">
//                     <NavLink 
//                     to='/competitive-swimming'
//                     className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
//                     RACING </NavLink>
//                 </li>
//                 {/* <li className="transition-all duration-200 hover:border-b-2 border-white">
//                     <NavLink 
//                     to='/aquaclub'
//                     className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
//                     AQUACLUB </NavLink>
//                 </li> */}
//                 <li className="transition-all duration-200 hover:border-b-2 border-white">
//                     <NavLink 
//                     to='/gallery'
//                     className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
//                     GALLERY</NavLink>
//                 </li>
//                 <li className="transition-all duration-200 hover:border-b-2 border-white">
//                     <NavLink
//                      to='/about-us'
//                     className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
//                      ABOUT</NavLink>
//                 </li>
//                 <li className="transition-all duration-200 hover:border-b-2 border-white">
//                     <NavLink 
//                     to='contact-us'
//                     className={({ isActive }) => isActive ? "border-b-2 border-white" : "text-white"}>
//                         CONTACT US
//                     </NavLink>
//                 </li>
                
//             </ul>
//         </div>
//     )
// }
