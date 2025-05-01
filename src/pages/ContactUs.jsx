import Footer from "../components/Footer"
import PageBannerPlusText from "../components/PageBannerPlusText"
import Map from "../components/Map"
import { Helmet } from "react-helmet"

export default function ContactUs() {
  return (
    <div className="">
      <Helmet>
                <title>Contact | Waves Swim Academy</title>
            </Helmet>
      <PageBannerPlusText
        img="contact.jpg"
        bg="bg-black/30 backdrop-blur-3xl"
        bannerHeight="h-40 md:h-50"
        text={
          <div className="">
            <h1>CONTACT US</h1>
          </div>
        }
      />

      <PageBannerPlusText
      bg="bg-gray-200"
      // img='contact_bg.avif'
        bannerHeight="h-450 md:h-300"
        text={
          <div className=" w-[350px] md:w-screen flex flex-col lg:flex-row justify-evenly sm:items-center   md:bg-transparent">


            {/* Vertical Section */}
            <div className="relative flex justify-center  bg-black/10 sm:rounded-md rounded-4xl md:rounded-[50px]  md:mt-0">
              <img src="contact.jpg" alt="" className="h-300  md:h-265 w-[500px] rounded-4xl md:rounded-[50px] backdrop-blur-3xl" />
              <div className="absolute inset-0 flex flex-col  items-center px-10 py-1 text-white bg-black/30 backdrop-blur-3xl rounded-4xl md:rounded-[50px]">
             
             
              <div className="my-12 h-full w-[90%] flex flex-col items-center space-y-10">
                <h1 className="font-extrabold text-2xl"></h1>
  
                <div className="flex flex-col items-center h-[500px] w-[320px] md:w-[375px] md:h-[450px] lg:h-[450px] xl:h-[450px] 2xl:h-[450px] bg-gray-100 border-2 shadow-2xl text-[#041E42] py-3 px-2 rounded-2xl  md:rounded-lg">
                  <h1 className="text-2xl">Waves, Zamin Palavaram</h1>
                  <p className="text-lg font-light w-[60%] md:w-[90%]  py-2 md:px-2 rounded-md my-2">
                    <p className="font-extrabold">Address</p>
                    No.92, Perumal Nagar Main Road,
                    Off 200ft Pallavaram, Thuraipakkam Road,
                    Zamin Pallavaram, Chennai – 600117.
                    <a className=" flex my-2 items-center justify-center hover:scale-110 transition-all duration-500 "
                     href="https://www.google.co.in/maps/place/Waves+Swim+Academy,+off+200ft,+Pallavaram-thouraipakkam+road,+92,+Ambedkar+Main+Rd,+Perumal+Nagar,+Old+Pallavaram,+Chennai,+Tamil+Nadu+600117/@12.9518109,80.1713235,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525e65357292df:0x2b8a31669516400a!8m2!3d12.9518273!4d80.1761941!16s%2Fg%2F11b7q6wmtc?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                     target="_blank"> <p className="font-bold text-sm text-red-700">OPEN IN MAPS</p> <img className="h-8 hover:scale-110" src="/location.png"/></a>
                  </p>
                  <p className="text-lg font-light w-[90%] px-2 rounded-md "><b className="text-xl font-extrabold">Phone</b><br/>
                  (+91) 7550223044<br/>
                  (+91) 7395999004<br/>
                  </p>
                  <p className="text-lg font-bold w-[90%]  py-2 px-2 rounded-md my-2">Send us a mail <br/>
                  <a
                    className="text-lg underline"
                    href="mailto:waveswimacademy@gmail.com"
                  >
                    waveswimacademy@gmail.com
                  </a>
                  </p>
                </div>
                <div className="flex flex-col items-center h-[500px] w-[320px] md:w-[375px] md:h-[450px] lg:h-[450px] xl:h-[450px] 2xl:h-[450px] bg-gray-100 border-2 shadow-2xl text-[#041E42] py-5 px-2 rounded-2xl  md:rounded-lg">
                  <h1 className="text-2xl">Waves, Kelambakkam</h1>
                  <p className="text-lg font-light w-[60%] md:w-[90%]  py-2 md:px-2 rounded-md my-2">
                    <p className="font-extrabold">Address</p>
                    No.92, Perumal Nagar Main Road,
                    Off 200ft Pallavaram, Thuraipakkam Road,
                    Zamin Pallavaram, Chennai – 600117.
                    <a className="flex my-2 items-center justify-center hover:scale-110 transition-all duration-500 "
                     href="https://www.google.co.in/maps/place/WAVES+SWIM+ACADEMY+-+Swim+Classes%2F+Swim+Lessons%2F+Swimming+Pool%2F+Swim+Academy+for+Kids%2F+Children+and+Adults/@12.7743669,80.2154981,17z/data=!4m14!1m7!3m6!1s0x3a52511ab0aa3e8f:0x5b2fadef4bebbf44!2sWAVES+SWIM+ACADEMY+-+Swim+Classes%2F+Swim+Lessons%2F+Swimming+Pool%2F+Swim+Academy+for+Kids%2F+Children+and+Adults!8m2!3d12.7743669!4d80.218073!16s%2Fg%2F11x8dt2bks!3m5!1s0x3a52511ab0aa3e8f:0x5b2fadef4bebbf44!8m2!3d12.7743669!4d80.218073!16s%2Fg%2F11x8dt2bks?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                     target="_blank"> <p className="font-bold text-sm text-red-700">OPEN IN MAPS</p> <img className="h-8 hover:scale-110" src="/location.png"/></a> 

                  </p>
                  <p className="text-lg font-light w-[90%] px-2 rounded-md "><b className="text-xl font-extrabold">Phone</b><br/>
                  (+91) 7550223044<br/>
                  (+91) 7395999004<br/>
                  </p>
                  <p className="text-lg font-bold w-[90%]  py-2 px-2 rounded-md my-2">Send us a mail <br/>
                  <a
                    className="text-lg text-blue-700 underline"
                    href="mailto:waveswimacademy@gmail.com"
                  >
                    waveswimacademy@gmail.com
                  </a>
                  </p>
                </div>

              
              </div>
              </div>
            </div>

            {/* Send Us A Message Section */}
            <div className="flex flex-col justify-start my-10 items-center space-y-10 md:w-[600px]">
              <div className="relative w-[350px] md:w-full h-[450px] md:h-[350px] rounded-4xl md:rounded-2xl overflow-hidden shadow-lg">
                {/* Background Image */}
                <img
                  src="contact.jpg"
                  alt="Contact Background"
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />

                {/* Form Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 backdrop-blur-3xl px-4 py-6 rounded-2xl text-white">
                  <h1 className="my-5 text-xl font-extrabold">SEND US A MESSAGE</h1>

                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col space-y-3">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="bg-gray-200 border border-black/40 w-[250px] rounded-md text-black text-sm h-10 px-3 placeholder:font-light"
                      />
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bg-gray-200 border border-black/40 w-[250px] rounded-md text-black text-sm h-10 px-3 placeholder:font-light"
                      />
                      <input
                        type="text"
                        placeholder="Contact"
                        className="bg-gray-200 border border-black/40 w-[250px] rounded-md text-black text-sm h-10 px-3 placeholder:font-light"
                      />
                    </div>

                    <textarea
                      placeholder="Message..."
                      rows="5"
                      className="bg-gray-200 border border-black/40 w-[250px] rounded-md py-2 px-3 text-black text-sm placeholder:font-light"
                    ></textarea>
                  </div>

                  <button className="bg-gray-200 mt-6 text-lg rounded-lg py-2 px-10 text-[#041E42] border-2 shadow border-[#041E42] hover:scale-110 transition-all duration-150 font-semibold">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Map */}
              {/* <div className="h-[300px] w-full">
                <Map />
              </div> */}
            </div>
          </div>
        }
      />

      {/* <Footer /> */}
    </div>
  )
}

