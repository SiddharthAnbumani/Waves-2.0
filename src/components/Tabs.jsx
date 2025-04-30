import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import PageBannerPlusText from "./PageBannerPlusText"
import { ScrollArea } from "./ui/scroll-area"

export default function NativeTabs(){
    return (
      <div className="w-screen bg-gray-100 flex justify-center ">
        <div className="h-full w-[80%] bg-gray-100 flex justify-center">
      <Tabs defaultValue="about" className="w-full bg-gray-100 h-full flex items-center  py-10 ">
        <TabsList className='h-15 w-full my-2'>
          <TabsTrigger value="about" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42] mx-'>ABOUT</TabsTrigger>
          <TabsTrigger value="founders" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42] mx-'>FOUNDERS</TabsTrigger>
          <TabsTrigger value="team" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42]'>MEET THE TEAM</TabsTrigger>
          <TabsTrigger value="policies" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42]'>POLICIES</TabsTrigger>
          <TabsTrigger value="rules" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42]'>RULES & REGULATIONS</TabsTrigger>
        </TabsList>
        <TabsContent value="about"className=' w-screen text-[#005A9C] rounded-md flex justify-center'>
          <div className="w-[95%] h-[90%]">
            <PageBannerPlusText
            img="contact.jpg"
        bg="bg-black/30 backdrop-blur-3xl"
            // bg="bg-[#005A9C]"
            bannerHeight="h-125"
            text={
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-end"> 
                  <p className="text-5xl text-white font-[abel]">W</p>
                  <p className="mr-3 font-light text-gray-100">e</p>

                  <p className="text-5xl text-white font-[abel]">A</p>
                  <p  className="mr-3  font-light text-gray-100">lways</p>

                  <p className="text-5xl text-white font-[abel]">V</p>
                  <p  className="mr-3  font-light text-gray-100">alue</p>
                  
                  <p className="text-5xl text-white font-[abel]">E</p>
                  <p  className="mr-3  font-light text-gray-100">very</p>

                  <p className="text-5xl text-white font-[abel]">S</p>
                  <p  className="mr-3  font-light text-gray-100">wimmer</p>
                </div>
                <p className="w-[90%] text-xl font-light font-[Libre-Franklin] text-justify px-4">
                    At Waves Swim Academy, we believe that every great swimmer starts with a confident first stroke. 
                    Our core strength lies in our “Learn to Swim” programs — designed to help children and adults 
                    build water confidence, master foundational techniques, and develop a lifelong love for swimming. 
                    We don’t just teach people how to swim — we nurture discipline, safety, and skill from the very beginning, 
                    laying the groundwork for long-term athletic growth.
                </p>
                <p className="w-[90%] text-xl font-light font-[Libre-Franklin] text-justify px-4">
                    With nearly a decade of experience in developing swimmers from beginners to champions, Waves has become 
                    Chennai’s leading center for high-performance aquatic training. Our academy features FINA-standard pools 
                    and a coaching curriculum built on international best practices, ensuring that our athletes are trained 
                    to meet and exceed global standards. Guided by certified professionals and mentored by nationally acclaimed 
                    swimmers, we continue to shape the next generation of competitive talent — one swimmer at a time.
                </p>
              </div>
            }/>
          </div>
        </TabsContent>

        <TabsContent value="founders" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='contact.jpg'
        bg="bg-black/30 backdrop-blur-3xl"

            bannerHeight="h-700"
            text={
              <div>
                <div className="flex flex-col items-center justify-center space-y-10">

                <div className="bg-gray-50 backdrop-blur-md rounded-xl w-[80%] text-black py-10 px-5 flex flex-col items-center shadow border-2">
                  <h1 className="my-3 text-white/90">
                    OUR FOUNDER  
                  </h1>
                  <div className="flex flex-col items-center text-black">
                    <img src="anbumani.heic" alt="" className=" h-80"/>
                    <p className="text-2xl font-semibold my-2 text-black"> Mr. ANBUMANI AYYAVOO</p>
                  </div>
                  <div className=" space-y-3 w-[90%] my-5 text-black bg-gray-100 py-3 px-5 rounded-md">
                  <p className="text-lg text-justify font-light font-[Libre-Franklin]">A visionary dedicated to raising the standards of swimming in Chennai, 
                    our academy was born out of a personal journey and a powerful mission. It all began when his daughter emerged 
                    as a National Medalist — a moment of pride that ignited a dream. Witnessing the impact of world-class training 
                    on her success, Mr. Anbumani was inspired to make that same level of excellence accessible to every aspiring swimmer.
                  </p>
                  <p className="text-justify text-lg font-light font-[Libre-Franklin]">
                    Determined to bridge the gap, he established this academy with the goal of delivering American Standards in swimming coaching, 
                    right here in Chennai. Though he is no longer with us to witness the full impact of his vision, his spirit and passion continue
                    to guide everything we do. Today, we proudly carry forward his legacy — committed to nurturing talent and transforming the
                    future of swimming in our city.
                  </p>
                  </div>
                </div> 

                <div className="bg-gray-50 backdrop-blur-md rounded-xl w-[80%] text-black py-10 px-5 flex flex-col items-center shadow border-2">
                  <h1 className="my-3 text-white/90">
                    Our Co-Founder & Managing Director
                  </h1>
                  <div className="flex flex-col items-center">
                    <img src="sunanthini.jpeg" alt="" className=" h-80"/>
                    <p className="text-2xl font-semibold my-2 text-black"> Mrs. SUNANTHINI ANBUMANI </p>
                  </div>
                  <div className=" space-y-3 w-[90%] my-5 text-black font-[Libre-Franklin] bg-gray-100 py-3 px-5 rounded-md">
                  <p className="text-xl text-justify font-light">An accomplished architect turned visionary entrepreneur, 
                    Mrs. Sunanthini Anbumani has been the backbone of the academy since day one. As the wife and closest partner of the founder,
                    she walked every step of the journey by his side, sharing not just the vision, but the determination to bring it to life.   
                  </p>
                  <p className="text-justify text-lg font-light font-[Libre-Franklin]">
                  After his absence, it was her unwavering commitment and leadership that propelled the academy forward. She is the reason 
                    we’ve expanded into new branches and reached more aspiring swimmers than ever before. With a sharp eye for excellence and a 
                    heart deeply rooted in the academy’s mission, Mrs. Sunanthini Anbumani continues to carry the vision forward — building on the legacy and 
                    turning dreams into reality.
                  </p>
                  </div>
                </div> 

                <div className="bg-gray-50 backdrop-blur-md rounded-xl w-[80%] text-black py-10 px-5 flex flex-col items-center shadow border-2">
                  <h1 className="my-3 text-black">
                    OUR MENTOR 
                  </h1>
                  <div className="flex flex-col items-center">
                    <img src="kaavya.jpeg" alt="" className=" h-80 rounded-2xl border-2 border-gray-200 shadow"/>
                    <p className="text-2xl font-semibold my-2 text-black ">KAAVYASHRI ANBUMANI </p>
                  </div>
                  <div className=" space-y-3 w-[90%] my-5 text-white/80 bg-gray-100 py-3 px-5 rounded-md">
                  <p className="text-xl text-justify font-light font-[Libre-Franklin] text-black">
                    Kaavyashri Anbumani’s journey in the world of swimming began at just 6 years old. 
                    From 2006 to 2019, she was an elite-level swimmer who proudly represented Tamil Nadu 
                    at national championships for over a decade. Her consistent performance and dedication 
                    earned her invitations to National Team trials—marking her as one of the state’s finest athletes.
                  </p>
                  <p className="text-justify text-lg font-light font-[Libre-Franklin] text-black">
                    To further her development, her father, Mr. Anbumani, ensured she received advanced training in the 
                    United States, where she was exposed to international coaching standards. After retiring from 
                    her competitive career, Kaavyashri naturally transitioned into mentoring, driven by her passion to 
                    shape the next generation of swimmers.
                  </p>
                  <p className="text-justify text-lg font-light font-[Libre-Franklin] text-black">
                    In 2019, she earned her ASCA (American Swimming Coaches Association) Level 1 to 5 certifications in 
                    Dubai, becoming a globally accredited coach. Since then, she has worked closely with our U.S.-based 
                    consultant, staying ahead with the latest in swim science and technique.
                  </p>
                  <p className="text-justify text-lg font-light font-[Libre-Franklin] text-black">
                    Currently, Kaavyashri is pursuing her Ph.D. in Biomedical Engineering, with her research centered around
                    Neuroscience. Despite her academic pursuits, she continues to lead from the front—regularly coordinating 
                    with our coaching team and guiding the academy’s training vision as our Mentor.
                  </p>
                  <p className="text-justify text-lg font-light font-[Libre-Franklin] text-black">
                    Her unique blend of international experience, scientific insight, and deep-rooted love for the sport makes 
                    her an exceptional guide for every swimmer who walks through our doors.
                  </p>
                  </div>
                </div> 
           
                </div>
              </div>
            }
            />
          </div>
        </TabsContent>

        <TabsContent value="policies" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='map.avif'
            bg='bg-white'
            bannerHeight="h-150"
            text={
              <div className="flex justify-center font-[Libre-Franklin]">
                <ScrollArea className="h-[550px] w-[85%] bg-gray-100 rounded-md border p-4 my-10">
                  <h1 className="font-extrabold text-black text-center my-5 font-sans">OUR POLICIES</h1>
                <div className="text-lg text-black font-light text-justify px-8 py-2 w-full">
                  <h1 className="text-xl font-semibold text-[#041E42]">
                    At WAVES SWIM ACADEMY, we are committed to providing high-quality swim lessons 
                    and ensuring the best experience for our students. To ensure a smooth and 
                    enjoyable experience for all our members, we kindly ask that you review and adhere 
                    to the following policies:
                  </h1>

                  <div className="space-y-10 my-5">
                    <div>
                      <ul className="text-[#041E42]">
                        <li className="text-red-600 font-bold">ATTENDENCE POLICY</li>
                        <ul className="list-disc px-10">
                        <li>
                          Members are required to attend their swim lessons as per the scheduled time. 
                        </li>
                        <li>
                          Missed Classes will not be rescheduled unless they fall under the make-up class policy <b>(see below).</b>
                        </li>
                        </ul>
                      </ul>
                    </div>

                    <div className="">
                    <ul className="text-[#041E42]">
                        <li className="text-red-600 font-bold">
                          REFUND POLICY
                        </li>
                        <ul className="list-disc px-10">
                          <li>
                            Fees paid for swim lessons are non-refundable under any circumstances.
                          </li>
                          <li>
                            Once enrolment is confirmed, the payment is final.
                          </li>
                        </ul>
                      </ul>
                    </div>

                    <div className="">
                    <ul className="text-[#041E42]">
                      <li className="text-red-600 font-bold">
                          TRANSFER POLICY
                      </li>
                      <ul className="list-disc px-10">
                        <li className="">
                          Swim lesson memberships are non-transferable and cannot be reassigned to another individual, including family members.
                        </li>
                      </ul>
                      </ul>
                    </div>


                    <div className="">
                    <ul className="text-[#041E42]">
                      <li className="text-red-600 font-bold">
                        NON-EXTENSION POLICY
                        </li>
                        <ul className="list-disc px-10">
                          <li>
                            Swim lessons must be completed within the session's designated period.
                          </li>
                          <li>
                            Extension beyond the session end will not be entertained regardless of missed classes.
                          </li>
                        </ul>
                      </ul>
                    </div>


                    <div className="">
                      <ul className="text-[#041E42]">
                        <li className="text-red-600 font-bold">
                          MEMBERSHIP CANCELLATION POLICY 
                        </li>
                        <ul className="list-disc px-10">
                          <li>
                            WAVES SWIM ACADEMY reserves the right to cancel or terminate memberships under the following circumstances,
                          </li>
                          <li>
                            Failure to adhere to academy rules, safety guidelines, or code of conduct, any behaviour or situation deemed inappropriate or unsafe by the academy management
                          </li>
                        </ul>
                      </ul>
                    </div>

                    <div className="">
                      <ul className="text-[#041E42]">
                        <li className="text-red-600 font-bold">
                        ADHERENCE TO POOL RULES POLICY 
                        </li>
                        <ul className="list-disc px-10">
                          <li>
                            The safety and well-being of all members, guests, and staff are our top priorities. 
                          </li>
                          <li>
                            To ensure a safe, hygienic, and enjoyable swimming environment, all members and guests are required to strictly adhere to the pool usage rules.
                          </li>
                        </ul>
                      </ul>
                    </div>

                    <div className="">
                      <ul className="text-[#041E42]">
                        <li className="text-red-600 font-bold">
                        FACILITY USE
                        </li>
                        <ul className="list-disc px-10">
                          <li>
                            Members are requested to use the facilities responsibly and follow all safety guidelines.
                          </li>
                          <li>
                            Swimwear and equipment must meet academy standards for hygiene and safety.
                          </li>
                        </ul>
                      </ul>
                    </div>

                    <div className="">
                      <ul className="text-[#041E42]">
                        <li className="text-red-600 font-bold">
                          ID REQUIRMENT
                        </li>
                        <ul className="list-disc px-10">
                          <li>
                          Members must present this card for access to their swim courses and facilities.
                          </li>
                          <li>
                            Members must record their arrival time in the designated TIME-IN and TIME-OUT Register upon entering the academy premises.
                          </li>
                        </ul>
                      </ul>
                    </div>
                    </div>

                    <div className="">
                      <ul className="text-[#041E42]">
                        <li className="text-red-600 font-bold ">
                        MAKE-UP CLASSES 
                        </li>
                        <ul className="list-disc px-10">
                        <li>
                          Make-up classes may be provided for lessons missed due to medical emergencies or unavoidable circumstances. (provided with proper documents).
                        </li>
                        <li>
                          Requests for make-up classes must be submitted in advance and are subject to availability and management approval.
                        </li>
                        </ul>
                      </ul>
                    </div>
                    
                    <div className="font-semibold text-lg text-red-700 my-10">
                      <p className="text-justify">
                        By enrolling in swim lessons at WAVES SWIM ACADEMY, you agree to comply with these policies. These rules are designed to ensure the best possible experience for all members while maintaining fairness and consistency across our programs.
                      </p>
                      <p className="text-center text-[#041E42]">
                        Thank you for your cooperation, and we look forward to helping you achieve your swimming goals
                      </p>
                    </div>
                </div>

            </ScrollArea>
              </div>
            }/>
          </div>
        </TabsContent>


        <TabsContent value="team" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='contact.jpg'
        bg="bg-black/30 backdrop-blur-3xl"
          
            bannerHeight="h-825"
            text={
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center w-[80%] my-10 space-y-4"> 
                  <h1>
                  OUR MENTOR'S QUALIFICATIONS
                  </h1>
                  <p className="text-lg font-light text-justify font-[Libre-Franklin]">
                  In addition to her achievements in the pool, Kaavyashri has distinguished herself in
                   the field of coaching. Beyond her decorated career as an elite athlete, she holds 
                   globally recognized ASCA Level 1 to 5 certifications, combining her competitive 
                   experience with world-class coaching standards to mentor and inspire the next generation 
                   of swimmers
                  </p>
                  <div className="grid grid-cols-4 space-x-2">
                    <img src="learn.jpeg" alt="" className="h-45" />
                    <img src="learn.jpeg" alt="" className="h-45" />
                    <img src="learn.jpeg" alt="" className="h-45" />
                    <img src="learn.jpeg" alt="" className="h-45" />
                  </div>
                </div>
                <h1 className="font-bold text-3xl my-10 pt-20">OUR COACHES, TRAINERS AND THEIR QUALIFICATIONS</h1>

                <div className="grid grid-cols-2 space-x-10 space-y-10">
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5 font-[Libre-Franklin]">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4 font-[Libre-Franklin]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
              
              
                </div>
              </div>
            }/>
          </div>
        </TabsContent>
        <TabsContent value="rules" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='map.avif'
            bg='bg-white'
            bannerHeight="h-150"
            text={
              <div className="flex justify-center font-[Libre-Franklin]">
                <ScrollArea className="h-[600px] w-[85%] bg-gray-100 rounded-md border p-4 my-10">
                  <h1 className="font-extrabold text-black text-center my-5 font-sans ">RULES & REGULATIONS</h1>
                <div className="text-lg text-black text-justify font-light px-6 py-4 w-full">
                  <ul className="list-decimal text-justify px-4 space-y-3">
                    <li className="font-semibold text-red-500">
                    Proper swimwear is required. 
                    <p className="text-[#041E42] font-light">
                    All swimmers must wear appropriate, fitted swim attire designed for swimming. Loose clothing, cotton garments, or non-swimwear outfits are not permitted as they can hinder movement and affect water quality.
                    </p>
                    </li>
                    <li className="font-semibold text-red-500">
                      Wearing a swim cap and goggles is mandatory.
                      <p className="text-[#041E42] font-light">
                      
                       Swim caps help maintain cleanliness by preventing hair from entering the pool, while goggles protect the eyes and enhance underwater visibility. These items are required for every session.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500"> 
                      Children must be 5 years or older to participate.
                      <p className="text-[#041E42] font-light">
                       Our programs are suitable for children aged 5 and above. Younger children are not permitted for safety and developmental considerations.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500">
                       Adult supervision is required at all times.
                       <p className="text-[#041E42] font-light">
                        A parent or guardian must be present and attentive throughout the session. Children cannot be left unattended on the premises.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500">
                    Medical clearance is advised for certain individuals.
                       <p className="text-[#041E42] font-light">
                       Elderly individuals, pregnant women, and those with pre-existing medical or physical conditions must consult a licensed physician before using the pool or participating in any swim sessions.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500">
                      Do not enter the facility if you are sick.
                      <p className="text-[#041E42] font-light">
                      Anyone with symptoms of fever, cold, flu, rashes, or contagious illness will not be allowed to enter the pool area, to protect the health of others.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500">
                      Entering the pool under the influence of alcohol or drugs is strictly prohibited.
                      <p className="text-[#041E42] font-light">
                       Swimmers must not be under the influence of intoxicating substances. This rule ensures everyone's safety and reduces the risk of accidents.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500">
                      No diving, pushing, or rough play is allowed. 
                      <p className="text-[#041E42] font-light">
                      To avoid injury, diving, running, horseplay, splashing, and physical aggression are not permitted in or around the pool.
                      </p>
                    </li>

                    <li className="font-semibold text-red-500">
                      All swimmers must shower before entering the pool.
                      <p className="text-[#041E42] font-light">
                      A quick rinse removes sweat, oils, and impurities from the body, helping to maintain clean and balanced pool water.
                      </p>
                    </li>

                    <li className="font-semibold text-red-500">
                      Do not apply oils, lotions, or creams before swimming. 
                      <p className="text-[#041E42] font-light">
                      These products contaminate the water and make surfaces slippery, increasing the risk of falls and equipment damage.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500">
                      No food or drinks are allowed on the pool deck.
                      <p className="text-[#041E42] font-light">
                      To maintain a clean and safe poolside area, all food and beverages must be consumed in designated lounge or waiting areas.
                      </p>
                    </li>
                    <li className="font-semibold text-red-500">

                    11. No slippers or shoes are allowed on the pool deck. 
                    <p className="text-[#041E42] font-light">
                    All visitors and swimmers must remove shoes or slippers before entering the pool area to avoid tracking dirt and germs.
                      </p>
                    </li>

                    <li className="font-semibold text-red-500">
                      Spitting in the pool is strictly prohibited.
                      <p className="text-[#041E42] font-light">
                       Spitting or any deliberate contamination of the pool is a serious hygiene violation and will result in disciplinary action.
                      </p>
                    </li>

                    <div className="my-10">
                      <p className="font-semibold text-justify px-5 text-red-600">
                      Failure to comply with any of the above rules may result in immediate removal from the session and/or suspension from future activities. These guidelines are in place to protect the health, safety, and well-being of all members, guests, and staff at Waves Swim Academy.
                      </p>
                    </div>
                  </ul>
                </div>

            </ScrollArea>
              </div>
            }/>
          </div>
        </TabsContent>
      </Tabs>
        </div>
      </div>
    )
}

