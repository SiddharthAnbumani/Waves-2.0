import VideoPlusText from "../components/VideoPlusText";
import PageBannerPlusText from "../components/PageBannerPlusText";
import Card from "../components/HomeComponents/Card";
import { NavLink } from "react-router-dom";
import HorizontalInfoBanner from "../components/HorizontalInfoBanner";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

export default function Courses(){
  return (
    <div className="">
      <Helmet>
        <title>Foundation Programs | Waves Swim Academy </title>
      </Helmet>
      <PageBannerPlusText img='lts.avif' text='OUR FOUNDATION SWIMMING PROGRAMS' textSize="text-4xl" imgClass='' bannerHeight="h-100"/>
      <PageBannerPlusText
      // img='footer.avif'
      img='gallery_bg.avif'
      bg="bg-black/30"
      bannerHeight="h-550"
      text={
            <div className="space-y-5">
              <div className=" flex flex-col items-center mb-20">
              <h1 className="text-5xl text-center mt-10 mb-5">PROGRAM CURRICULUM</h1>
              <p className="font-light text-xl w-[90%] text-center">
                At Waves Swim Academy, we believe every swimmer is unique—and so is their 
                journey. If your child already knows how to swim, they are welcome to enroll
                 directly into the course that best matches their current skill level. There 
                 is no requirement to start from the beginning if they are ready for more advanced 
                 instruction. Each of our courses includes a set of clearly defined graduation skills
              </p>
              <p className="font-semibold text-lg w-[90%] text-center my-5 ">
              To continue with competitive swimming, it is essential that the swimmer has
               successfully completed the graduation requirements from the relevant 
               foundation and advanced levels
              </p>
            </div>
            <h1 className="text-3xl text-center my-10">DON'T KNOW HOW TO SWIM?</h1>

            <HorizontalInfoBanner
            title='LEARN TO SWIM'
            navLink="/courses/learn-to-swim"
            subHeading='Period : 14 days'
            subColor="text-white"
            titleColor="text-green-600"
            img='lts.avif'
            text='In this class, children will learn how to swim the strokes of Freestyle
                 (with side breathing) and will be introduced to Backstroke. The Freestyle 
                  side breathing skill may be the most important skill a child learns in swim 
                  lessons. Swim Strokes is drill-oriented and follows these skill progressions 
                  during each class:'
            btnText="Read more.."
            btnBgTextColor="bg-green-600"
            border=""
            />
            {/* <div className=" flex flex-col items-center my-20">
              <h1 className="text-5xl text-center mt-10 mb-5">Our Foundation Programs</h1>
              <p className="font-light text-lg w-[90%] text-center">
                At Waves Swim Academy, we believe every swimmer is unique—and so is their 
                journey. If your child already knows how to swim, they are welcome to enroll
                 directly into the course that best matches their current skill level. There 
                 is no requirement to start from the beginning if they are ready for more advanced 
                 instruction. Each of our courses includes a set of clearly defined graduation skills
              </p>
              <p className="font-semibold text-lg w-[90%] text-center my-5 ">
              To continue with competitive swimming, it is essential that the swimmer has
               successfully completed the graduation requirements from the relevant 
               foundation and advanced levels
              </p>
            </div> */}
              <h1 className="text-3xl text-center my-10 mt-20">OUR FOUNDATION PROGRAMS</h1>
            <HorizontalInfoBanner
            title='Level 1'
            subHeading="Period : 30 days"
            navLink="/courses/beginner"
            titleColor="text-yellow-600"
            img='lts.avif'
            text="Unlock your child's swimming potential in just 4 weeks! This intensive 1-month 
            course focuses on building confidence, technique, and efficiency in the water. Through
             structured drills and expert coaching, swimmers will master Freestyle with side breathing 
             and be introduced to Backstroke fundamentals — two of the most essential"
            btnText="Read more.."
            border=""
            btnBgTextColor="bg-yellow-600"
            />

            <HorizontalInfoBanner
            title='INTERMEDIATE'
            navLink="/courses/intermediate"
            subHeading="Period : 3 Months"
            titleColor="text-orange-600"
            img='lts.avif'
            text='Designed for young swimmers ready to refine their technique, this 3-month program focuses 
            on mastering both Freestyle with side breathing and Backstroke, through structured, drill-based 
            sessions. From breath control and streamline kicking to roll turns and block starts, swimmers will
             build a solid technical foundation'
            btnBgTextColor="bg-orange-600"
            btnText="Read more.."
            border=""
            />
            <HorizontalInfoBanner
            title='ADVANCED'
            navLink="/courses/advanced"
            subHeading="Period : 6 Months"
            titleColor="text-red-500"
            img='lts.avif'
            text='This intensive 6-month course is designed for young swimmers ready to master
            the advanced strokes of Freestyle, Backstroke, Breaststroke, and Butterfly. With
            a focus on technique refinement and stroke development, swimmers will perfect their
            form and improve efficiency through dedicated drills.'
            btnText="Read more.."
            btnBgTextColor="bg-red-600"
            border=""
            />
            <HorizontalInfoBanner
            title='STROKE SCHOOL'
            navLink="/courses/stroke-school"
            subHeading="Period : 12 Months"
            titleColor="text-violet-600"
            img='lts.avif'
            text='Our Stroke School program is a vital step in every swimmer’s journey to becoming
            a complete and skilled athlete. In Stroke School, we teach the art of swimming — not 
            just swimming back and forth across the pool. Our experienced coaches focus on developing 
            a deep understanding of the fundamentals of competitive swimming while instilling a passion
            for the sport through engaging, fun lessons.'
            btnText="Read more.."
            btnBgTextColor="bg-violet-700"
            border=""
            />

            </div>
      }
      />
      <Footer/>
    </div>
  )
}