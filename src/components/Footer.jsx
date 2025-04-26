import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="">
      <footer className="relative h-100 bg-[#041E42] w-full">
        <img src="/footer.avif" className="w-full h-full object-cover" />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {/* Container for 4 divs */}
          <div className="w-11/12 h-full flex space-x-2">

            <div className="w-1/4 h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Contact Us</h1>
                <p className="text-white font-bold text-lg">Waves, Zamin Pallavaram</p>
                <p className="text-white font-light text-md px-4"> <b className="font-bold">Phone no:</b><br/>
                    (+91) – 7550223044 <br/> (+91) – 7395999004<br/>
                   
                </p>
                <p className="text-white font-bold text-lg">Waves, Kelambakkam</p>
                <p className="text-white font-light text-md px-4"> <b className="font-bold">Phone no:</b><br/>
                    (+91) – 7550223044 <br/> (+91) – 7395999004<br/>
                    <br/>
                </p>
                <p className="text-white">
                <b className="font-bold text-lg">E-mail:</b> <br/>
                    <a className="text-blue-700 font-semibold" href="mailto:waveswimacademy.gmail.com"  target="_blank" rel="noopener noreferrer">
                        waveswimacademy@gmail.com
                    </a>
                </p>
            </div>

            <div className="w-1/4 h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Links</h1>
                <ul className="text-gray-100 text-lg font-light flex flex-col justify-start items-center h-full w-full space-y-3 my-2">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about-us'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/swimming-courses'>Swimming Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to='/competitive-swimming'>Competitive Swimming</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/aquaclub'>Aqua Club</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-us'>Contact Us</NavLink>
                    </li>
                </ul>
            </div>

            <div className="w-1/4  h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Our Programs</h1>
                <ul className="text-gray-100 text-lg font-light flex flex-col justify-start items-center h-full w-full space-y-3 my-2">
                    <li>
                        <NavLink to='/swimming-courses'>Foundation Programs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses/learn-to-swim'> Learn to Swim</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses/beginner'>Beginner</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses/intermediate'>Intermediate</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses/advanced'>Advanced</NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses/stroke-school'>Stroke School</NavLink>
                    </li>
                    <li>
                        <NavLink to='/competitive-swimming'>Competitive Swimming</NavLink>
                    </li>
                </ul>
                {/* <img src="/image.png" alt="" /> */}
            </div>
            <div className="w-1/4 h-full">
            <div className=" flex flex-col justify-start items-center space-y-3 h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Locations</h1>
                <div className="flex flex-col h-full space-y-10">
                <div className="">
                    <h1 className="text-white font-bold text-lg">Waves, Zamin Pallavaram</h1>
                    <p className="text-white font-light text-md px-4 text-justify">
                        No.92, Perumal Nagar Main Road,
                        Off 200ft Pallavaram, Thuraipakkam Road,
                        Zamin Pallavaram, Chennai – 600117</p>
                </div>
                <div className="">
                    <h1 className="text-white font-bold text-lg">Waves, Kelambakkam</h1>
                    <p className="text-white font-light text-md px-4 text-justify"> 
                        No.92, Perumal Nagar Main Road,
                        Off 200ft Pallavaram, Thuraipakkam Road,
                        Zamin Pallavaram, Chennai – 600117</p>
                </div>
                </div>
            </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className="h-20 bg-black flex flex-col items-center-safe justify-center">
      <p className="text-white  text-lg not-first-of-type:font-extrabold">&copy; {new Date().getFullYear()}Waves Swim Academy. All rights reserved.</p>
      <div className="flex space-x-2">
        <p className="text-white font-bold">Designed and Developed by </p>
        <a className='text-blue-700 font-bold' target="_blank" href="https://siddharthanbumani.in/">Siddharth Anbumani</a>
      </div>
      </footer>
      </div>
    );
  }
  