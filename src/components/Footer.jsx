import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="">
      <footer className="relative h-100 bg-black w-full">
        <img src="/footer.avif" className="w-full h-full object-cover" />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {/* Container for 4 divs */}
          <div className="w-11/12 h-full flex space-x-2">

            <div className="w-1/4 h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Contact Us</h1>
                <p className="text-white font-bold text-md px-4"> Address:<br/>
                    No.92, Perumal Nagar Main Road,
                    Off 200ft Pallavaram, Thuraipakkam Road,
                    Zamin Pallavaram, Chennai – 600117</p>
                <br/>
                <p className="text-white font-bold text-md px-4"> Phone no:<br/>
                    (+91) – 7550223044 / (+91) – 7395999004<br/>
                    <br/>
                    E-mail:<br/>
                    <a href="mailto:waveswimacademy.gmail.com"  target="_blank" rel="noopener noreferrer">
                        waveswimacademy@gmail.com
                    </a>
                </p>
            </div>

            <div className="w-1/4 h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Links</h1>
                <ul className="text-white text-lg font-bold flex flex-col justify-start items-center h-full w-full space-y-3 my-2">
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
                    <li>
                        <NavLink to='/aquaclub'>Aqua Club</NavLink>
                    </li>
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
                <ul className="text-white text-lg font-bold flex flex-col justify-start items-center h-full w-full space-y-3 my-2">
                    <li>
                        <NavLink> KIDS</NavLink>
                    </li>
                    <li>
                        <NavLink>ADULTS</NavLink>
                    </li>
                    <li>
                        <NavLink>LADY TRAINER</NavLink>
                    </li>
                    <li>
                        <NavLink>WEEKENDS</NavLink>
                    </li>
                </ul>
                {/* <img src="/image.png" alt="" /> */}
            </div>
            <div className="w-1/4 h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Locations</h1>
            </div>

          </div>
        </div>
      </footer>
      <footer className="h-20 bg-black flex flex-col items-center-safe justify-center">
      <p className="text-white  text-lg not-first-of-type:font-extrabold">&copy; {new Date().getFullYear()}Waves Swim Academy. All rights reserved.</p>
      <p className="text-white font-bold">Designed by <a  className='text-blue-700'target="_blank" href="https://siddharthanbumani.in/">Siddharth Anbumani</a></p>
      </footer>
      </div>
    );
  }
  