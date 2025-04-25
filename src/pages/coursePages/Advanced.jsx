import { NavLink } from "react-router-dom"
import PageBannerPlusText from "../../components/PageBannerPlusText"
import StrokeDisplay from "../../components/StrokeDisplay"
export default function Advanced(){
  return (
    <div className="">
      <PageBannerPlusText
  img="learn.jpeg"
  bg="bg-black/30 backdrop-blur-xl"
  bannerHeight="h-500"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-10 py-20 w-[90%] backdrop-blur-sm rounded-md">
          <h1 className="text-5xl text-center my-10">FROM COMPETENT TO CONFIDENT</h1>
          
          <p className="text-2xl font-light">
            At Waves Swim Academy, our six-month Advanced Stroke course is tailored for young swimmers ready to push their boundaries. 
            This program focuses on refining Freestyle and Backstroke while introducing the more complex techniques of Breaststroke and Butterfly. 
            Through structured drills, stroke timing, and consistent technique work, swimmers will advance towards mastery in all four competitive strokes.
          </p>

          <p className="text-center mt-10 mb-3">WHO IS THIS COURSE FOR?</p>
          <ul className="text-xl font-light text-center space-x-10 my-4">
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

          <p className="text-xl font-light flex">
            <p className="font-bold mr-5">Overview:</p>
            This six-month program is designed for skill refinement and stroke advancement. Swimmers will develop proper kick mechanics, arm stroke coordination, and precise stroke timing for each of the four strokes: Freestyle, Backstroke, Breaststroke, and Butterfly.
          </p>

          <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
          <p className="text-xl text-center">
            Each session includes focused drills and practice in the following areas:
          </p>

          <div className="flex justify-center my-5 rounded-2xl">
            <ul className="font-light text-xl bg-black/70 py-10 px-10 w-[600px] rounded-2xl">
              <li>Refinement of Freestyle and Backstroke techniques</li>
              <li>Introduction to Breaststroke kick and arm coordination</li>
              <li>Timing drills for Breaststroke strokes</li>
              <li>Body dolphin technique for Butterfly kick</li>
              <li>Butterfly arm stroke, kick rhythm, and full stroke timing</li>
            </ul>
          </div>

          <p className="text-2xl text-center mt-10 mb-2">GRADUATION SKILL</p>
          <div className="flex justify-center my-5 rounded-2xl">
            <ul className="text-xl bg-green-700 py-10 px-10 w-[600px] rounded-2xl">
              <li>✔ Swim 25 meters of Freestyle with consistent form</li>
              <li>✔ Swim 25 meters of Backstroke with correct alignment</li>
              <li>✔ Swim 25 meters of Breaststroke with proper kick and glide</li>
              <li>✔ Swim 25 meters of Butterfly with body rhythm and timing</li>
              <li>✔ <strong>"I.M. Special" Graduate:</strong> Swim 100 meters Individual Medley (25M each of Butterfly, Backstroke, Breaststroke, and Freestyle)</li>
              <p className="mt-5">
                Upon successful completion, swimmers are ready for pre-competitive training or advanced performance coaching.
              </p>
            </ul>
          </div>
          <StrokeDisplay
          freestyle={true}
          backstroke={true}
          breaststroke={true}
          butterfly={true}/>

        </div>

        <NavLink 
          className="bg-yellow-600 text-white my-5 text-center py-3 text-xl font-bold w-100 rounded-md transform transition-all duration-150 hover:scale-110" 
          to="/swimming-courses"
        >
          Back
        </NavLink>
      </div>
    </div>
  }
/>

    </div>
  )
}