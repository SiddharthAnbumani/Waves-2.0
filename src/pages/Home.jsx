import CardComponent from "../components/HomeComponents/CardComponent";
import { Helmet } from "react-helmet";
import Card from "../components/HomeComponents/Card";
import Map from "../components/Map";
import VideoPlusText from "../components/VideoPlusText";
import Footer from "../components/Footer";
import PageBannerPlusText from "../components/PageBannerPlusText";
import { NavLink } from "react-router-dom";

export default function Home(){
    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Home | Waves Swim Academy</title>
            </Helmet>
            <VideoPlusText img='swim.mov' 
            text={  
                <div className="flex flex-col justify-center items-center">
                    {/* <h1 className="text-5xl font-extrabold">Turning Potential into Performance </h1> */}
                    <h1 className="text-6xl font-extrabold">We turn Potential into Performance </h1>
                    <p className="text-lg italic font-light w-[50%] text-center">
                        Waves Swim Academy is Chennai’s leading swim training center focused on 
                        shaping swimmers into champions.From beginners to pros, 
                        we offerworld-class coaching for all age groups.
                    </p>
                </div>
                 }
             />
             <PageBannerPlusText 
             img='footer.avif'
             bannerHeight="h-90"
             text=
             {
            <div className="flex flex-col justify-center items-center py-10">
                <h1 className="text-4xl font-bold text-center my-5">WHO ARE WE</h1>
                <div className="space-y-5 flex flex-col items-center justify-center">
                    <p className="w-[80%] text-lg font-semibold text-center">
                    At Waves Swim Academy, we turn first strokes into future champions. 
                    From building water confidence to training elite athletes, our FINA-standard facilities
                    and world-class coaching empower swimmers of all ages to thrive — safely, skillfully, and confidently.
                    </p>
                    <p className="w-[80%] text-lg font-semibold text-center">
                    We currently operate at Zamin Pallavaram and Incor PBEL City, Kelambakkam, with a brand-new high-performance 
                    center under construction in Rajakilpakkam.</p>
                    <p className="w-[80%] text-lg font-semibold text-center mb-10">
                    In addition, we've partnered with Casa Grand to offer professional swim lessons in their residential communities, 
                    bringing expert training right to your doorstep.
                    </p>
                </div>
             </div>
             }
             />
             <PageBannerPlusText
             img='map.avif'
             bg=""
             bannerHeight="h-150"
             text={
                <div className="text-black flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold"> Waves Academy Notice Board</h1>
                    <p className="text-lg font-light">Stay informed with our latest programs, events, and announcements.</p>
                    <div className="flex space-x-5 py-4">
                    <img src="INCOR PBEL.png" alt="" className="h-100 my-5 border-2 border-blue-700 transform-all duration-300 hover:scale-105" />
                    <img src="poster_2.png" alt="" className="h-100 my-5 border-2 border-blue-700 transform-all duration-300 hover:scale-105" />
                    <img src="INCOR PBEL.png" alt="" className="h-100 my-5 border-2 border-blue-700 transform-all duration-300 hover:scale-105" />
                    </div>
                </div>
             }
             />
             
             <PageBannerPlusText img='ripple_1.avif'
             bannerHeight="h-150"
             text={
                 <div className="flex flex-col items-center space-y-10">
                     {/* <h1 text-4xl font-extrabold text-center>WHO DO WE WORK WITH</h1> */}
                     <h1 text-4xl font-extrabold text-center>Swimming Tracks & Levels</h1>
                     <div className="flex justify-center items-center space-x-5">
                        <Card
                        img="/lts.avif"
                        width="w-80"
                        btnClass="bg-green-600"
                        nav="/swimming-courses"
                         title='FOUNDATION PROGRAMS'
                         content='Designed for beginners—both kids and adults—this program
                          builds water confidence, teaches water safety, and introduces basic 
                          swimming skills in a calm and encouraging environment.'
                          />
                        {/* <Card
                        img="stroke_.avif"
                        btnClass="bg-yellow-600"
                        title='Stroke School'
                        content='Ideal for swimmers who know one or two strokes. We focus on
                         improving technique, introducing drills, and building stamina to prepare 
                         them for advanced levels or competitive swimming.'
                        /> */}
                        <Card
                        nav="/competitive-swimming"
                        width="w-80"
                        img="racing.avif"
                        btnClass="bg-red-600"
                        title='COMPETITVE TRAINING'
                        content='Tailored for experienced swimmers aiming to compete or excel at a 
                        high level. Focuses on stroke refinement, race strategies, endurance, and
                         performance-driven training under professional guidance.'
                        />
                        <Card
                        width="w-80"
                        img="special_child.png"
                        title='AUST SWIM'
                        content='A gentle and inclusive program for children with special needs. 
                        Our trained coaches offer patient, personalized instruction to help them
                        feel safe, confident, and enjoy the water at their own pace'
                        />
                     </div>
                 </div>
             }/>
             <PageBannerPlusText
             img='map.avif'
             bg=""
             bannerHeight="h-250"
             text={
                <div className="my-10 flex flex-col items-center justify-center space-y-5 text-black">
                <h1 className="text-5xl font-extrabold text-center">Where We Work</h1>
                <p className="text-lg font-light w-[70%] text-center">
                    We operate our primary facility in Zamin Pallavaram, along with an additional rented 
                    space at PBEL Incor’s Clubhouse in Kelambakkam. Additionally, we offer classes at 
                    select Casa Grande Flats pools.
                </p>

                <div className="w-screen flex items-center justify-center space-x-5">
                    <div className="">
                    <Map/>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 w-[600px] h-[700px]"> 
                        <div className="h-[42%] w-[70%] bg-black/80 backdrop-blur-2xl rounded-4xl">
                            <div className="flex flex-col justify-center items-center space-y-2 py-6 px-3">
                            <img src="/waves~pallavaram.webp" alt="" className="h-40 rounded-lg"/>
                            <p className="text-lg font-light text-white ">WAVES SWIM ACADEMY ~ ZAMIN PALLAVARAM</p>
                            <NavLink className='bg-blue-800 px-10 py-1 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110' to='/pallavaram'>Visit </NavLink>
                            </div>
                        </div>
                        <div className="h-[42%] w-[70%] bg-black/80 backdrop-blur-2xl rounded-4xl">
                            <div className="flex flex-col justify-center items-center space-y-2 py-6 px-3">
                            <img src="/waves~incor.jpg" alt="" className="h-40 rounded-lg"/>
                            <p className="text-lg font-light text-white ">WAVES SWIM ACADEMY ~ INCOR KELAMBAKKAM</p>
                            <NavLink className='bg-blue-800 px-10 py-1 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110' to='/incor'>Visit </NavLink>
                            </div>
                        </div>
                       

                    </div>
                </div>
             </div>
             }
             />
            
            {/* <div className="bg-blue-300 flex flex-col items-center justify-center py-10">
                <h1 className="text-5xl font-extrabold">WAVES SWIM ACADEMY</h1>
                <p className="text-2xl font-bold">Turning Potential Into Performance</p>
                <p className="text-lg px-4 py-2 text-center">
                    WAVES SWIM ACADEMY is a premier swimming facility dedicated 
                    to nurturing competitive swimmers and promoting athletic excellence. 
                    Our newly inaugurated pool is built to FINA technical specifications 
                    for a short course pool, designed to meet the demands of serious training 
                    and performance development.<br/>
                    We are committed to developing safe, skilled, and confident swimmers through 
                    structured, year-round programs. Our academy caters to a broad cross-section 
                    of swimmers—including children, adults, women, senior citizens, and Austswim-
                    certified learners—with a strong focus on competitive training.
                    </p>
                    <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-extrabold">What Sets Us Apart:</h1>
                    <ul className="my-5 space-y-3 flex flex-col items-center justify-center font-semibold text-xl">
                        <li>
                            Professional, goal-driven swim instruction.
                        </li>
                        <li>
                            Small batch coaching with personalized guidance.
                        </li>
                        <li>
                            High-quality aquatic programs built on proven methodologies.
                        </li>
                        <li>
                            A competition-standard pool environment for optimal training.
                        </li>
                        <li>
                            Dedicated observation areas for parents and guardians.
                        </li>
                    </ul>
                    </div>
            </div> */}
            <Footer/>
        </div>
    )
}

