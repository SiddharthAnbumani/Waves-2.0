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
                <div className="flex flex-col justify-center items-center space-y-5">
                    <h1 className="text-5xl font-extrabold shadow-2xl">WE TURN POTENTIAL INTO PERFORMANCE</h1>
                    <p className="text-2xl bg-white/5 py-2 px-5 rounded-2xl italic font-light w-[50%] text-center shadow-2xl">
                        Waves Swim Academy is Chennai’s leading swim training center focused on 
                        shaping swimmers into champions.From beginners to pros, 
                        we offerworld-class coaching for all age groups.
                    </p>
                </div>
                 }
             />
             <PageBannerPlusText 
             img="contact.jpg"
        bg="bg-black/30 backdrop-blur-3xl"
             bannerHeight="h-90"
             text=
             {
            <div className="flex flex-col justify-center items-center py-10">
                <h1 className="text-3xl font-bold text-center my-5">WHO ARE WE</h1>
                <div className="space-y-5 flex flex-col items-center justify-center">
                    <p className="w-[80%] text-lg font-light text-center">
                    At Waves Swim Academy, we turn first strokes into future champions. 
                    From building water confidence to training elite athletes, our FINA-standard facilities
                    and world-class coaching empower swimmers of all ages to thrive — safely, skillfully, and confidently.
                    </p>
                    <p className="w-[80%] text-lg font-light text-center">
                    We currently operate at Zamin Pallavaram and Incor PBEL City, Kelambakkam, with a brand-new high-performance 
                    center under construction in Rajakilpakkam.</p>
                    <p className="w-[80%] text-lg font-light text-center mb-10">
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
                    <img src="INCOR PBEL.png" alt="" className="h-100 my-5 border-2 border-[#041E42] transform-all duration-300 hover:scale-105" />
                    <img src="poster_2.png" alt="" className="h-100 my-5 border-2 border-[#041E42] transform-all duration-300 hover:scale-105" />
                    <img src="INCOR PBEL.png" alt="" className="h-100 my-5 border-2 border-[#041E42] transform-all duration-300 hover:scale-105" />
                    </div>
                </div>
             }
             />
             
             <PageBannerPlusText 
             img="contact.jpg"
            bg="bg-black/30 backdrop-blur-3xl"
             bannerHeight="h-150"
             text={
                 <div className="flex flex-col items-center space-y-10">
                     {/* <h1 text-4xl font-extrabold text-center>WHO DO WE WORK WITH</h1> */}
                     <h1 text-4xl font-extrabold text-center>Swimming Tracks & Levels</h1>
                     <div className="flex justify-center items-center space-x-5">
                        <Card
                        img="/lts.avif"
                        width="w-80"
                        btnClass="bg-[#041E42]"
                        btnText="View more.."
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
                        btnText="View more.."                        
                        btnClass="bg-[#041E42]"
                        title='COMPETITVE TRAINING'
                        content='Tailored for experienced swimmers aiming to compete or excel at a 
                        high level. Focuses on stroke refinement, race strategies, endurance, and
                         performance-driven training under professional guidance.'
                        />
                        <Card
                        width="w-80"
                        img="special_child.png"
                        title='AUST SWIM'
                        btnText="View more.."                        
                        btnClass="bg-[#041E42]"
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
             bannerHeight="h-175"
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
                    {/* <div className="flex flex-col justify-center items-center space-y-4 w-[600px] h-[700px]"> 

                        <div className=" w-[80%] bg-[url('branch.avif')] bg-black/10 backdrop-blur-2xl rounded-lg py-4 ">
                            <div className="flex flex-col justify-center items-center space-y-2 py-6 px-3">
                            <img src="/waves~pallavaram.webp" alt="" className="h-40 rounded-sm"/>
                            <p className="text-lg font-semibold text-white ">WAVES SWIM ACADEMY ~ ZAMIN PALLAVARAM</p>
                            <NavLink className='bg-white px-10 py-1 text-lg font-bold  text-black rounded-md transform transform-all duration-150 hover:scale-110' to='/pallavaram'>View branch</NavLink>
                            </div>
                        </div>
                        <div className="w-[80%] bg-[url('branch.avif')] backdrop-blur-2xl rounded-lg py-4 ">
                            <div className="flex flex-col justify-center items-center space-y-2 py-6 px-3">
                            <img src="/waves~incor.jpg" alt="" className="h-40 rounded-lg"/>
                            <p className="text-lg font-semibold text-white ">WAVES SWIM ACADEMY ~ INCOR KELAMBAKKAM</p>
                            <NavLink className='bg-white px-10 py-1 text-lg font-bold  text-black rounded-md transform transform-all duration-150 hover:scale-110' to='/incor'>View branch </NavLink>
                            </div>
                        </div>
                       

                    </div> */}
                </div>
             </div>
             }
             />
            
           
            <PageBannerPlusText
            img="contact_1.jpg"
        bg="bg-black/30 backdrop-blur-3xl"
            bannerHeight="h-155"
            text={
                <div className="flex flex-col items-center">
                    <h1 className="my-3">WHAT DO THEY SAY ABOUT US?</h1>
                    <p className="text-xl font-light italic mb-10">TESTIMONIALS</p>
                    <div className=" flex space-x-10">
                        <div className="bg-[url('branch.avif')] backdrop-blur-2xl w-[310px] h-[400px] flex justify-center items-center rounded-xl">
                            <div className="w-[90%] h-[90%] bg-gray-200 text-[#041E42] backdrop-blur-lg space-y-2 py-2 px-2 rounded-lg">
                            <p className="text-lg px-3">SWIMMER'S TESTIMONIAL</p>
                            <p className="text-lg  px-3 font-light">"Training at Waves Academy has transformed not only my skills but my confidence as an athlete. 
                                The coaching here matches international standards, and the environment pushes you to be your best 
                                every single day."</p>
                            <p className="text-sm px-3"> ~ Arjun M, National Level Swimmer</p>
                            </div>
                        </div>
                        <div className="bg-[url('branch.avif')] backdrop-blur-2xl w-[310px] h-[400px] flex justify-center items-center rounded-xl">
                            <div className="w-[90%] h-[90%] bg-gray-200 text-[#041E42] backdrop-blur-lg space-y-2 py-2 px-2 rounded-lg">
                            <p className="text-lg px-3">SWIMMER'S TESTIMONIAL</p>
                            <p className="text-lg  px-3 font-light">"Training at Waves Academy has transformed not only my skills but my confidence as an athlete. 
                                The coaching here matches international standards, and the environment pushes you to be your best 
                                every single day."</p>
                            <p className="text-sm px-3"> ~ Arjun M, National Level Swimmer</p>
                            </div>
                        </div>
                        <div className="bg-[url('branch.avif')] backdrop-blur-2xl w-[310px] h-[400px] flex justify-center items-center rounded-xl">
                            <div className="w-[90%] h-[90%] bg-gray-200 text-[#041E42] backdrop-blur-lg space-y-2 py-2 px-2 rounded-lg">
                            <p className="text-lg px-3">SWIMMER'S TESTIMONIAL</p>
                            <p className="text-lg  px-3 font-light">"Training at Waves Academy has transformed not only my skills but my confidence as an athlete. 
                                The coaching here matches international standards, and the environment pushes you to be your best 
                                every single day."</p>
                            <p className="text-sm px-3"> ~ Arjun M, National Level Swimmer</p>
                            </div>
                        </div>
                        <div className="bg-[url('branch.avif')] backdrop-blur-2xl w-[310px] h-[400px] flex justify-center items-center rounded-xl">
                            <div className="w-[90%] h-[90%] bg-gray-200 text-[#041E42] backdrop-blur-lg space-y-2 py-2 px-2 rounded-lg">
                            <p className="text-lg px-3">SWIMMER'S TESTIMONIAL</p>
                            <p className="text-lg  px-3 font-light">"Training at Waves Academy has transformed not only my skills but my confidence as an athlete. 
                                The coaching here matches international standards, and the environment pushes you to be your best 
                                every single day."</p>
                            <p className="text-sm px-3"> ~ Arjun M, National Level Swimmer</p>
                            </div>
                        </div>
                    </div>
                </div>
            }/>
            <Footer/>
        </div>
    )
}

