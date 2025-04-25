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
              bannerHeight="h-300"
              text={
                <div className="w-screen flex justify-evenly mx-20 bg-red-300 py-20">
                  <div className="relative flex justify-center">
                    <img src="contact_1.jpg" alt="" className="h-225"/>
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

                  <div className="flex flex-col justify-between items-center bg-blue-300 space-y-10 ">
                    <div className="flex flex-col items-center bg-red-400 justify-center w-full h-6/12">
                      <h1>SEND US A MESSAGE</h1>
                      <div className="flex px-5">
                        <div className="flex flex-col space-x-10 space-y-2 ">
                          <input type="text" name="" id="" className="bg-white w-[250px] rounded-md" />
                          <input type="text" name="" id="" className="bg-white w-[250px] rounded-md" />
                          <input type="text" name="" id="" className="bg-white w-[250px] rounded-md" />
                        </div>
                        <div className="">
                          <textarea name="" id="" cols='20' rows='3' className="bg-white rounded-md"></textarea>
                          
                        </div>
                      </div>
                    </div>
                    <div className="h-6/12 w-full">
                      <Map/>
                    </div>
                  </div>

                  </div>
         }/>
            <Footer/>
    </div>
  )
}