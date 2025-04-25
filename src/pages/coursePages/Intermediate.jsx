import { NavLink } from "react-router-dom"
import PageBannerPlusText from "../../components/PageBannerPlusText"
import StrokeDisplay from "../../components/StrokeDisplay"
export default function Intermediate(){
  return (
    <div className="">
      <PageBannerPlusText
      img='contact.jpg'
      bg="bg-black/30 backdrop-blur-2xl"
      text={
        <h1 className="text-4xl text-center my-10">LEAVE THE BEGINNER BEHIND, MOVE FORWARD</h1>
      }/>
      <PageBannerPlusText
  img='contact_1.jpg'
  bg="bg-black/30 backdrop-blur-2xl"
  bannerHeight="h-500"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-10 py-10 bg-white text-black w-[90%] backdrop-blur-sm rounded-md">
          <div className="">
          <div className="">
              <div className=" mt-0 mb-5 text-3xl"> 
                <NavLink to='/swimming-courses' className='hover:bg-white hover:border-2 px-2 py-1 rounded-4xl hover:scale-110 transition-all duration-150'>
                &#8592;
                </NavLink>
              </div>
            </div>
          <p className="text-2xl font-light px-4 py-2 text-justify">
            At Waves Swim Academy, we help swimmers transition from basic skills to confident, efficient movement through water. 
            Our three-month <strong>Swim Strokes</strong> program is tailored for those who have already built foundational comfort in the pool 
            and are now ready to develop stroke techniques, enhance endurance, and refine their form in both Freestyle and Backstroke.
          </p>
          </div>

          <p className="text-center mt-10 mb-3">WHO IS THIS COURSE FOR?</p>
          <div className="flex justify-center">

          <ul className=" list-decimal text-xl font-light space-x-10 my-4">
            <li>CONFIDENT BEGINNERS</li>
            <li>EARLY INTERMEDIATE SWIMMERS</li>
            <li>CHILDREN AGES 6+ READY TO ADVANCE</li>
          </ul>
          </div>
<div className="bg-gray-100 rounded-xl">

          <p className="text-xl font-light text-justify px-4 py-2">
            <b className="font-bold mr-5">Course Overview:</b>
            This structured three-month curriculum focuses on core stroke development. Swimmers will learn proper Freestyle with side breathing 
            and be introduced to Backstroke technique. The course follows a progressive drill format that improves breath control, body alignment, 
            and water confidence.
          </p>
</div>

          <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
          <p className="text-xl font-semibold text-center">
            Each session builds toward mastery through the following drills and skill exercises:
          </p>

          <div className="flex justify-center my-5 rounded-2xl">
            <ul className="list-disc font-light text-xl bg-gray-100 py-10 px-10 w-[600px] rounded-2xl">
              <li>Refined breath control and rhythmic breathing techniques</li>
              <li>Flutter kicks using kickboard and streamlined body positioning (tummy and back)</li>
              <li>Stationary side breathing drills to build technique and timing</li>
              <li>One-arm Freestyle drills leading to full Freestyle with side breathing</li>
              <li>Introduction to Backstroke and maintaining position on the surface</li>
              <li>Freestyle roll and dive starts from block positions</li>
            </ul>
          </div>

          <p className="text-2xl text-center mt-10 mb-2">GRADUATION SKILLS</p>
          <div className="flex flex-col items-center justify-center my-5 rounded-2xl">
            <ul className=" list-disc text-xl font-light bg-green-50 py-10 px-10 w-[600px] rounded-2xl">
              <li> Swim 25 meters Freestyle with at least 3 properly timed side breaths</li>
              <li> Swim 15 meters Backstroke while maintaining form and position</li>
              <li> Kick 25 meters on the back without assistance, arms at sides</li>
              <li> Kick 25 meters on the stomach in streamlined position without a float</li>
            </ul>
            <div className="w-[80%]">
              <p className="mt-5 text-lg text-justify">
                Upon completion, swimmers are encouraged to continue their journey in the 
                <strong> Advanced Swim Strokes </strong> or <strong> Strokes School </strong> program for further development.
              </p>
            </div>
          </div>
          <div className="flex justify-center">

        <div className="w-[60%] bg-gray-100 rounded-2xl border-2 shadow">
        <StrokeDisplay
        freestyle={true}
        backstroke={true}/>
        </div>
          </div>
        <div className="w-full flex justify-center">
        <NavLink 
          className="bg-[#041E42] text-white my-5 text-center py-3 text-xl font-bold px-15 rounded-md transform transform-all duration-150 hover:scale-110" 
          to="/swimming-courses"
        >
          Back
        </NavLink>
        </div>
        </div>
      </div>
    </div>
  }
/>

        
    </div>
  )
}