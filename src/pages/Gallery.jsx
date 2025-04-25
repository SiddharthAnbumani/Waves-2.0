import PageBannerPlusText from "../components/PageBannerPlusText"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Card from "../components/HomeComponents/Card"
import BgCard from "../components/BgCard"

export default function Gallery(){
  return (
    <div className="">
       <Helmet>
          <title>Gallery | Waves Swim Academy</title>
        </Helmet>
        <PageBannerPlusText
        img='contact.jpg'
         bg="bg-black/30 backdrop-blur-md"
        text='WAVES SWIM ACADEMY - A VISUAL CHRONICLE'/>
        <PageBannerPlusText 
        img='contact_1.jpg'
        bg="bg-black/30 backdrop-blur-2xl"
        bannerHeight="h-150"
        text={
          <div className="flex space-x-4">
           <BgCard
           text='FOUNDATION IMAGES'
           nav='/gallery-foundation'
           />
           <BgCard
           text='EVENT & CELEBRATIONS'
           nav='/gallery-celebrations'/>

           <BgCard
           text='OUR CHAMPIONS'
           nav='/gallery-athletes'
           />
           <BgCard
           text='TRAINING & PRACTICE'
           nav='/gallery-training'
           />
           
          </div>
        }/>
        <Footer/>
    </div>
  )
}