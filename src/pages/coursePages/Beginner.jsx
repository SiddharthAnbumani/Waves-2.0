import StrokeDisplay from "../../components/StrokeDisplay"
import PageBannerPlusText from "../../components/PageBannerPlusText"
import { NavLink } from "react-router-dom"
export default function Beginner(){
  return (
    <div className="">

  <PageBannerPlusText
  img='contact.jpg'
  text={
    <h1 className="text-4xl text-center my-10">LEAVE THE BEGINNER BEHIND,MOVE FORWARD</h1>
  }/>
  <PageBannerPlusText
  img='contact_1.jpg'
  bg="bg-black/30 backdrop-blur-3xl"
  bannerHeight="h-500"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="px-10 py-10 pt-10 bg-white text-black w-[90%] backdrop-blur-sm rounded-md">
        <div className="flex flex-col">
          <div className="">
            <div className="">
              <div className=" mt-0 mb-5 text-3xl"> 
                <NavLink to='/swimming-courses' className='hover:bg-white hover:border-2 px-2 py-1 rounded-4xl hover:scale-110 transition-all duration-150'>
                &#8592;
                </NavLink>
              </div>
            </div>
            <p className=" text-2xl px-2 py-2 font-light">
              At Waves Swim Academy, we guide swimmers beyond the basics with our technique-focused programs. 
              Our Swim Strokes course is specifically designed for swimmers who are already comfortable in the 
              water and are ready to refine their skills, strengthen their technique, and build endurance in 
              Freestyle and Backstroke. With a month-long curriculum packed with drills, progressions, and 
              goal-based training, learners will elevate their swim game to the next level.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
        <p className="text-center mt-10">WHO IS THIS COURSE FOR?</p>
        <ul className="text-xl font-light list-decimal space-x-10 my-4">
          <li>
            CONFIDENT BEGINNERS
          </li>
          <li>
            EARLY INTERMEDIATE SWIMMERS
          </li>
          <li>
            KIDS AGES 6+ READY TO ADVANCE
          </li>
        </ul>
        </div>
        <div className="bg-gray-100  rounded-lg">
          <p className="text-xl font-light text-justify py-2 px-4"> <b className="font-bold mr-5">Overview:</b>
          This one-month program focuses on stroke development, especially Freestyle with side breathing, 
          and introduces foundational Backstroke mechanics. Through skill progressions and targeted drills, 
          swimmers will develop breath control, proper body positioning, and efficient movement in the water.
          </p>
        </div>

        <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
        <p className="text-xl font-semibold text-center">
        Each session includes focused drills and practice in the following areas:
        </p>

        <div className="flex justify-center my-5 rounded-2xl">
        <ul className="font-light list-disc text-xl bg-gray-100 border-2 shadow  py-10 px-10 w-[600px] rounded-2xl">
          <li>
            Advanced breath control and rhythmic breathing
          </li>
          <li>
            Flutter kick drills using kickboard and streamline body position
          </li>
          <li>
            Stationary side breathing techniques
          </li>
          <li>
            Freestyle with side breathing and arm recovery
          </li>
          <li>
            Back floating and introduction to Backstroke
          </li>
          <li>
            Dive from block and streamline Freestyle swim
          </li>
        </ul>
        </div>

        <p className="text-2xl text-center mt-10 mb-2">GRADUATION SKILL</p>
        <div className="flex justify-center my-5 rounded-2xl">
          <ul className="font-light text-xl list-disc bg-green-50 border-2 shadow  py-10 px-10 w-[600px] rounded-2xl">
            <li>
             Swim 25 meters Freestyle with at least 3 controlled side breaths
            </li>
            <li>
             Swim 10 meters Backstroke while maintaining surface alignment
            </li>
            <li>
             Kick 25 meters on the back using a kickboard with arms at the sides
            </li>
            <li>
             Kick 10 meters on the stomach in streamline without a kickboard
            </li>
          <p className="mt-5">Upon graduation, swimmers are encouraged to enroll in <strong>Advanced Swim Strokes</strong> for continued skill refinement and endurance training.</p>
          </ul>
        </div>
        <div className="w-full flex justify-center my-10"> 
        <div className="bg-gray-100 w-[60%] rounded-xl shadow border-2">
        <StrokeDisplay
        freestyle={true}
        backstroke={true}/>
        </div>
        </div>
        <div className="w-full flex justify-center">
          <NavLink className={`bg-[#041E42] text-white my-5 text-center py-3 text-xl font-bold px-15 rounded-lg transform transform-all duration-150 hover:scale-110`}  to='/swimming-courses'>Back</NavLink>
        </div>
      </div>
      </div>

    </div>
  }
/>

      </div>
  )
}