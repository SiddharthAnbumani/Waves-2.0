import Footer from "../components/Footer"
import PageBannerPlusText from "../components/PageBannerPlusText"
import Map from "../components/Map"

export default function ContactUs(){
  return (
    <div className="">
            <PageBannerPlusText 
                img='contact.jpg'

            text={
              <div>
                <h1>CONTACT US</h1>
              </div>
            }/>
             <PageBannerPlusText 
             bg='bg-white'
              bannerHeight="h-210"
              text={
                <div className="w-screen flex justify-start mx-20">
                  <div className="relative flex justify-center">
                    <img src="contact_1.jpg" alt="" className="h-200"/>
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm  flex flex-col justify-center items-center px-10">
                      <h1 className="font-extrabold">CONTACT US</h1>
                      <div className="bg-black/70 px-4 py-2 rounded-sm flex flex-col items-center justify-center">
                      <p className="text-2xl">Send us a mail</p>
                      <a  className='text-lg text-blue-700' href="mailto:waveswimacademy@gmail.com">waveswimacademy@gmail.com</a>
                      </div>
                     
                      <p className="text-lg bg-black/70 backdrop-blur-3xl w-[80%] py-2 px-2 rounded-md my-3">
                        Phone: 
                        <p className="text-xl font-light">7550223044 , 7395999004</p>
                      </p>
                      <p className="text-lg font-light bg-black/70 backdrop-blur-3xl py-2 px-2 rounded-md my-2"> 
                      <p className="font-extrabold">
                        Address: Waves Pallavaram,
                        </p> 
                        No.92, Perumal Nagar Main Road,
                        Off 200ft Pallavaram, Thuraipakkam Road,
                        Zamin Pallavaram, Chennai – 600117. 
                        </p>
                      <p className="text-lg font-light bg-black/70 backdrop-blur-3xl py-2 px-2 rounded-md my-2"> 
                      <p className="font-extrabold">
                        Address: Waves Kelambakkam,
                        </p> 
                        No.92, Perumal Nagar Main Road,
                        Off 200ft Pallavaram, Thuraipakkam Road,
                        Zamin Pallavaram, Chennai – 600117. 
                        </p>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <Map/>
                  </div>
                  </div>
         }/>
            <Footer/>
    </div>
  )
}