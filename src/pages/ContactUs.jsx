import Footer from "../components/Footer"
import PageBannerPlusText from "../components/PageBannerPlusText"
import Map from "../components/Map"

export default function ContactUs() {
  return (
    <div className="">
      <PageBannerPlusText
        img="contact.jpg"
        bg="bg-black/30 backdrop-blur-md"
        text={
          <div className="">
            <h1>CONTACT US</h1>
          </div>
        }
      />

      <PageBannerPlusText
      bg="bg-blue-100"
      // img='contact_bg.avif'
        bannerHeight="h-300"
        text={
          <div className="w-screen flex flex-col lg:flex-row justify-evenly">
            {/* Contact Info Section */}
            <div className="relative flex justify-center  bg-black/10 rounded-[50px]">
              {/* <img src="contact.jpg" alt="" className="h-250 w-[500px] rounded-[50px] bg-black/10" /> */}
              <img src="contact.jpg" alt="" className="h-250 w-[500px] rounded-[50px] backdrop-blur-3xl" />
              <div className="absolute inset-0 flex flex-col justify-center items-center px-10 text-white bg-black/30 backdrop-blur-md rounded-[50px] ">
                <h1 className="font-extrabold">CONTACT US</h1>

                <div className="w-[90%]  backdrop-blur-3xl px-4 py-2 rounded-sm flex flex-col items-center justify-center mb-3">
                  <p className="text-2xl">Send us a mail</p>
                  <a
                    className="text-lg text-blue-400 underline"
                    href="mailto:waveswimacademy@gmail.com"
                  >
                    waveswimacademy@gmail.com
                  </a>
                </div>

                <p className="text-lg  backdrop-blur-3xl w-[90%] py-2 px-2 rounded-md my-2">
                  Phone:
                  <span className="block text-xl font-light">
                    7550223044 , 7395999004
                  </span>
                </p>

                <p className="text-lg font-light w-[90%] backdrop-blur-3xl py-2 px-2 rounded-md my-2">
                  <p className="font-extrabold">Address: Waves Pallavaram,</p>
                  No.92, Perumal Nagar Main Road,
                  Off 200ft Pallavaram, Thuraipakkam Road,
                  Zamin Pallavaram, Chennai – 600117.
                </p>

                <p className="text-lg font-light w-[90%]  backdrop-blur-3xl py-2 px-2 rounded-md my-2">
                  <p className="font-extrabold">Address: Waves Kelambakkam,</p>
                  No.92, Perumal Nagar Main Road,
                  Off 200ft Pallavaram, Thuraipakkam Road,
                  Zamin Pallavaram, Chennai – 600117.
                </p>
              </div>
            </div>

            {/* Send Us A Message Section */}
            <div className="flex flex-col justify-start my-10 items-center space-y-10 w-[600px]">
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
                {/* Background Image */}
                <img
                  src="contact.jpg"
                  alt="Contact Background"
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />

                {/* Form Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-6 rounded-2xl text-white">
                  <h1 className="my-5 text-xl font-extrabold">SEND US A MESSAGE</h1>

                  <div className="flex gap-4">
                    <div className="flex flex-col space-y-3">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="bg-white border border-black/40 w-[250px] rounded-md text-black text-sm h-10 px-3 placeholder:font-light"
                      />
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bg-white border border-black/40 w-[250px] rounded-md text-black text-sm h-10 px-3 placeholder:font-light"
                      />
                      <input
                        type="text"
                        placeholder="Contact"
                        className="bg-white border border-black/40 w-[250px] rounded-md text-black text-sm h-10 px-3 placeholder:font-light"
                      />
                    </div>

                    <textarea
                      placeholder="Message..."
                      rows="5"
                      className="bg-white border border-black/40 w-[250px] rounded-md py-2 px-3 text-black text-sm placeholder:font-light"
                    ></textarea>
                  </div>

                  <button className="bg-blue-700 mt-6 text-lg rounded-lg py-2 px-10 text-white hover:scale-110 transition-all duration-150 font-semibold">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] w-full">
                <Map />
              </div>
            </div>
          </div>
        }
      />

      <Footer />
    </div>
  )
}


// import Footer from "../components/Footer"
// import PageBannerPlusText from "../components/PageBannerPlusText"
// import Map from "../components/Map"

// export default function ContactUs(){
//   return (
//     <div className="">
//             <PageBannerPlusText 
//                 img='contact.jpg'

//             text={
//               <div>
//                 <h1>CONTACT US</h1>
//               </div>
//             }/>

//              <PageBannerPlusText 
//              bg='bg-white'
//               bannerHeight="h-300"
//               text={
//                 <div className="w-screen flex justify-evenly mx-20  py-20">
//                   <div className="relative flex justify-center">
//                     <img src="contact_1.jpg" alt="" className="h-250"/>
//                     <div className="absolute inset-0 bg-black/10 backdrop-blur-sm  flex flex-col justify-center items-center px-10">
//                       <h1 className="font-extrabold">CONTACT US</h1>
//                       <div className="bg-black/70 px-4 py-2 rounded-sm flex flex-col items-center justify-center">
//                       <p className="text-2xl">Send us a mail</p>
//                       <a  className='text-lg text-blue-700' href="mailto:waveswimacademy@gmail.com">waveswimacademy@gmail.com</a>
//                       </div>
                     
//                       <p className="text-lg bg-black/70 backdrop-blur-3xl w-[80%] py-2 px-2 rounded-md my-3">
//                         Phone: 
//                         <p className="text-xl font-light">7550223044 , 7395999004</p>
//                       </p>
//                       <p className="text-lg font-light bg-black/70 backdrop-blur-3xl py-2 px-2 rounded-md my-2"> 
//                       <p className="font-extrabold">
//                         Address: Waves Pallavaram,
//                         </p> 
//                         No.92, Perumal Nagar Main Road,
//                         Off 200ft Pallavaram, Thuraipakkam Road,
//                         Zamin Pallavaram, Chennai – 600117. 
//                         </p>
//                       <p className="text-lg font-light bg-black/70 backdrop-blur-3xl py-2 px-2 rounded-md my-2"> 
//                       <p className="font-extrabold">
//                         Address: Waves Kelambakkam,
//                         </p> 
//                         No.92, Perumal Nagar Main Road,
//                         Off 200ft Pallavaram, Thuraipakkam Road,
//                         Zamin Pallavaram, Chennai – 600117. 
//                         </p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-between items-center space-y-10 ">

//                     <div className="flex justify-center items-center relative">
//                     <div className="absolute">
//                       <img src="contact_1.jpg" alt="" className="h-100 z-0 object-cover rounded-2xl " />
//                     </div>
//                     <div className="absolute flex flex-col items-center justify-center w-full h-5/12  rounded-md">
//                       <h1 className="my-5 font-extrabold">SEND US A MESSAGE</h1>
//                       <div className="flex px-5">
//                         <div className="flex flex-col space-x-10 space-y-2 ">
//                           <input type="text" name="" id="" placeholder="Enter Your Name" className="bg-white border-2 border-black/40 w-[250px] rounded-md text-black text-sm h-10 py-2 px-3 placeholder:font-light " />
//                           <input type="text" name="" id="" placeholder="Enter Your Mail" className="bg-white border-2 border-black/40 w-[250px] rounded-md text-black text-sm h-10 py-2 px-3 placeholder:font-light" />
//                           <input type="text" name="" id="" placeholder="Contact" className="bg-white w-[250px]  border-2 border-black/40 rounded-md text-black text-sm h-10 py-2 px-3 placeholder:font-light" />
//                         </div>
//                         <div className="">
//                           <textarea name="" id="" cols='25' placeholder="Message.." rows='5' className="bg-white border-2 border-black/40 rounded-md py-4 px-3 text-black text-sm placeholder:font-light placeholder:text-center"></textarea>
//                         </div>
//                       </div>

//                       <button className="bg-blue-700 mt-6 text-lg rounded-lg py-2 px-10 text-white hover:scale-110 transition-all duration-150 font-semibold">Send Message</button>
//                     </div>
//                     </div>
//                     <div className="h-7/12 flex items-center justify-center">
//                       <Map/>
//                     </div>
                    
//                   </div>

//                   </div>
//          }/>
//             <Footer/>
//     </div>
//   )
// }
