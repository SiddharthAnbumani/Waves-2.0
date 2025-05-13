export default function PhFooter(){
    return (
        <div className="flex justify-center items-center bg-amber-00">
        <div className="min-h-screen w-[] justify-center items-center bg-black">
          {/* Contact Section */}
          <div className="md:w-1/4 flex flex-col items-center bg-black md:bg-transparent">
            <h1 className="text-2xl font-extrabold text-center text-white my-5">Contact Us</h1>
            <p className="text-white font-bold text-lg">Waves, Zamin Pallavaram</p>
            <p className="text-white font-light text-md px-4">
              <b className="font-bold">Phone no:</b><br />
              (+91) – 7550223044 <br /> (+91) – 7395999004<br />
            </p>
            <p className="text-white font-bold text-lg">Waves, Kelambakkam</p>
            <p className="text-white font-light text-md px-4">
              <b className="font-bold">Phone no:</b><br />
              (+91) – 7550223044 <br /> (+91) – 7395999004<br /><br />
            </p>
            <p className="text-white">
              <b className="font-bold text-lg">E-mail:</b><br />
              <a className="text-blue-700 font-semibold" href="mailto:waveswimacademy.gmail.com" target="_blank" rel="noopener noreferrer">
                waveswimacademy@gmail.com
              </a>
            </p>
          </div>
  
          <hr className="my-10 border-gray-100" />
  
          {/* Links */}
          <div className="w-full bg-black md:bg-transparent py-5">
            <h1 className="text-2xl font-extrabold text-center text-white mb-5">Links</h1>
            <ul className="text-gray-100 text-lg font-light flex flex-col justify-start items-center h-full w-full space-y-3 my-2">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about-us'>About</NavLink></li>
              <li><NavLink to='/swimming-courses'>Swimming Courses</NavLink></li>
              <li><NavLink to='/competitive-swimming'>Competitive Swimming</NavLink></li>
              <li><NavLink to='/gallery'>Gallery</NavLink></li>
              <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
            </ul>
          </div>
  <hr />
          {/* Join "Programs" and "Locations" in one flex layout */}
          <div className="flex flex-col md:flex-row w-full gap-0 py-5">
            {/* Programs */}
            <div className="w-full md:w-1/2 bg-black md:bg-transparent py-5">
              <h1 className="text-2xl font-extrabold text-center text-white mb-5">Our Programs</h1>
              <ul className="text-gray-100 text-lg font-light flex flex-col justify-start items-center space-y-3 my-2">
                <li><NavLink to='/swimming-courses'>Foundation Programs</NavLink></li>
                <li><NavLink to='/courses/learn-to-swim'>Learn to Swim</NavLink></li>
                <li><NavLink to='/courses/beginner'>Beginner</NavLink></li>
                <li><NavLink to='/courses/intermediate'>Intermediate</NavLink></li>
                <li><NavLink to='/courses/advanced'>Advanced</NavLink></li>
                <li><NavLink to='/courses/stroke-school'>Stroke School</NavLink></li>
                <li><NavLink to='/competitive-swimming'>Competitive Swimming</NavLink></li>
              </ul>
            </div>
  <hr />
            {/* Locations */}
            <div className="px-4 py-4 w-full md:w-1/2 bg-black md:bg-transparent">
              <div className="flex flex-col justify-start items-center space-y-3 h-full">
                <h1 className="text-2xl font-extrabold text-center text-white my-5">Locations</h1>
                <div className="flex flex-col h-full space-y-10">
                  <div>
                    <h1 className="text-white font-bold text-lg">Waves, Zamin Pallavaram</h1>
                    <p className="text-white font-light text-md px-4 text-justify">
                      No.92, Perumal Nagar Main Road,<br />
                      Off 200ft Pallavaram, Thuraipakkam Road,<br />
                      Zamin Pallavaram, Chennai – 600117
                    </p>
                  </div>
                  <div>
                    <h1 className="text-white font-bold text-lg">Waves, Kelambakkam</h1>
                    <p className="text-white font-light text-md px-4 text-justify">
                      No.92, Perumal Nagar Main Road,<br />
                      Off 200ft Pallavaram, Thuraipakkam Road,<br />
                      Zamin Pallavaram, Chennai – 600117
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  <hr />
          {/* Footer */}
          <div className="flex justify-center w-screen bg-black py-5">
            <footer className="h-20 bg-black md:flex flex-col items-center-safe justify-center">
              <p className="text-white text-lg not-first-of-type:font-extrabold">
                &copy; {new Date().getFullYear()} Waves Swim Academy. All rights reserved.
              </p>
              <div className="flex space-x-2">
                <p className="text-white font-bold">Designed and Developed by</p>
                <a className='text-blue-700 font-bold' target="_blank" href="https://siddharthanbumani.in/" rel="noopener noreferrer">
                  Siddharth Anbumani
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    )
}