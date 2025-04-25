import PageBannerPlusText from "../components/PageBannerPlusText"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Card from "../components/HomeComponents/Card"

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
        img='racing.avif'
        bg="bg-black/20"
        bannerHeight="h-150"
        text={
          <div className="flex space-x-4">
           <Card 
           width="w-80"
           title='FOUNDATION IMAGES'
           nav="/gallery-foundation"
           btnClass="bg-red-600"
           btnText="VIEW"
           />

           <Card 
           width="w-80"
          nav="/gallery-athletes"
           btnClass="bg-red-600"
           title='OUR CHAMPIONS'
           btnText="VIEW"
           />

           <Card 
            nav="/gallery-celebrations"
           btnClass="bg-red-600"
           width="w-80"
           title='EVENT AND CELEBRATIONS'
           btnText="VIEW"
           />

           <Card 
          nav="/gallery-training"
           btnClass="bg-red-600"
           width="w-80"
           title='TRANING AND PRACTICE'
           btnText="VIEW"
           />
          </div>
        }/>
        <Footer/>
    </div>
  )
}