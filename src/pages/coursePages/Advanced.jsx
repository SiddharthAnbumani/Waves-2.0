import { NavLink } from "react-router-dom"
import PageBannerPlusText from "../../components/PageBannerPlusText"
import StrokeDisplay from "../../components/StrokeDisplay"
export default function Advanced(){
  return (
    <div className="">
    <PageBannerPlusText
    img='contact.jpg'
    bg="bg-black/30 backdrop-blur-2xl"
    text={
      <div>
          <h1 className="text-4xl text-center my-10">FROM COMPETENT TO CONFIDENT</h1>
      </div>
    }
    />

      <PageBannerPlusText
  img="contact_1.jpg"
  bg="bg-black/30 backdrop-blur-xl"
  bannerHeight="h-470"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-10 py-10 bg-white text-black rounded-md w-[90%] backdrop-blur-sm ">
          <div className="">
            <div className=" mt-0 mb-5 text-3xl"> 
            <NavLink to='/swimming-courses' className='hover:bg-white hover:border-2 px-2 py-1 rounded-4xl hover:scale-110 transition-all duration-150'>
            &#8592;
            </NavLink>
            </div>
          </div>
          <div className="text-justify bg-gray-100 py-4 px-3 rounded-xl">
          <p className="text-2xl font-light px-3">
            At Waves Swim Academy, our six-month Advanced Stroke course is tailored for young swimmers ready to push their boundaries. 
            This program focuses on refining Freestyle and Backstroke while introducing the more complex techniques of Breaststroke and Butterfly. 
            Through structured drills, stroke timing, and consistent technique work, swimmers will advance towards mastery in all four competitive strokes.
          </p>
          </div>
          
          <div className="">
            <p className="text-center mt-10 mb-3">WHO IS THIS COURSE FOR?</p>
            <div className="flex justify-center">
            <ul className="text-xl font-light list-decimal space-x-10 my-2 mb-10">
              <li>
                GRADUATES OF INTERMEDIATE COURSES
              </li>
              <li>
                CONFIDENT SWIMMERS AGES 8+
              </li>
              <li>
                FUTURE COMPETITIVE SWIMMERS
              </li>
            </ul>
            </div>
          </div>

          <div className="bg-gray-100 py-4 px-2 rounded-xl">
            <p className="text-xl font-light text-justify px-3">
              <b className="font-bold mr-3">Overview:</b>
              This six-month program is designed for skill refinement and stroke advancement. Swimmers will develop proper kick mechanics, arm stroke coordination, and precise stroke timing for each of the four strokes: Freestyle, Backstroke, Breaststroke, and Butterfly.
            </p>
          </div>

          <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
          <p className="text-xl text-center font-semibold">
            Each session includes focused drills and practice in the following areas:
          </p>

          <div className="flex justify-center my-5 rounded-2xl">
            <ul className="font-light text-xl bg-gray-100 border-2 shadow py-10 px-10 w-[600px] rounded-2xl">
              <li>Refinement of Freestyle and Backstroke techniques</li>
              <li>Introduction to Breaststroke kick and arm coordination</li>
              <li>Timing drills for Breaststroke strokes</li>
              <li>Body dolphin technique for Butterfly kick</li>
              <li>Butterfly arm stroke, kick rhythm, and full stroke timing</li>
            </ul>
          </div>

          <p className="text-2xl text-center mt-10 mb-2">GRADUATION SKILL</p>
          <div className="flex flex-col items-center justify-center my-5 rounded-2xl">
            <ul className="text-xl bg-green-50 border-2 shadow py-10 px-10 w-[600px] font-light list-disc rounded-2xl">
              <li> Swim 25 meters of Freestyle with consistent form</li>
              <li> Swim 25 meters of Backstroke with correct alignment</li>
              <li> Swim 25 meters of Breaststroke with proper kick and glide</li>
              <li> Swim 25 meters of Butterfly with body rhythm and timing</li>
              <li> <strong>"I.M. Special" Graduate:</strong> Swim 100 meters Individual Medley (25M each of Butterfly, Backstroke, Breaststroke, and Freestyle)</li>
            </ul>
              <p className="mt-5 font-semibold text-lg text-justify">
                Upon successful completion, swimmers are ready for pre-competitive training or advanced performance coaching.
              </p>
          </div>
          <div className="bg-gray-100 border-2 shadow rounded-xl">
          <StrokeDisplay
          freestyle={true}
          backstroke={true}
          breaststroke={true}
          butterfly={true}/>
          </div>
          <div className="flex justify-center">
        <NavLink 
          className="bg-[#041E42] text-white my-5 text-center py-3 text-xl font-bold px-15 rounded-md transform transition-all duration-150 hover:scale-110" 
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