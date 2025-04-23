import StrokeDisplay from "../../components/StrokeDisplay"
import PageBannerPlusText from "../../components/PageBannerPlusText"
import { NavLink } from "react-router-dom"
export default function Beginner(){
  return (
    <div className="">
       {/* <PageBannerPlusText
  img='learn.jpeg'
  bannerHeight="h-400"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="px-10 py-20 bg-black/60 w-[90%] backdrop-blur-sm rounded-md">
        <h1 className="text-5xl text-center my-10">LEAVE BEGINNER BEHIND, MOVE FORWARD</h1>
        <p className=" text-2xl  font-light">
          At Waves Swim Academy, we believe in building a strong swimming foundation
          through structured, engaging, and safe instruction. Our Learn to Swim programs
          are designed for all ages—children, adults, and women—offering flexible options
          to suit every lifestyle and comfort level. Whether you're stepping into
          the water for the first time or returning after a break, our goal is to help
          you swim confidently and independently through skill-based progression.
        </p>

        <p className="text-center">WHO CAN TAKE THIS COURSE?</p>
        <ul className="text-xl font-light text-center space-x-10">
          <li>
            KIDS
          </li>
          <li>
            ADULTS
          </li>
          <li>
            WEEKEND LEARNERS
          </li>
        </ul>

        <p className="text-xl font-light flex"> <p className="font-bold mr-5">Overview:</p>
        These entry-level group classes are conducted in a supportive, small-group setting. 
        Each session is built on core water safety, body positioning, breath control, and 
        stroke development.</p>

        <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
        <p className="text-xl text-center">
        Each class follows a structured curriculum focusing on:
        </p>

        <div className="flex justify-center my-5 rounded-2xl">
        <ul className="font-light text-xl bg-black/70  py-10 px-10 w-[600px] rounded-2xl">
          <li>
            Water comfort and safety
          </li>
          <li>
            Full submersion (child/adult-led; never forced)
          </li>
          <li>
            Breath holding and controlled exhalation
          </li>
          <li>
            Front kicking with support
          </li>
          <li>
            In-line kicking (on back and stomach)
          </li>
          <li>
            Introduction to paddle strokes
          </li>
          <li>
            Freestyle with “pop-up” breathing technique
          </li>
        </ul>
        </div>

        <p className="text-2xl text-center mt-10 mb-2">GRADUATION SKILL</p>
        <div className="flex justify-center my-5 rounded-2xl">
          <ul className="font- text-xl  bg-green-700  py-10 px-10 w-[600px] rounded-2xl">
            <li>
            ✔ Comfortable underwater submersion
            </li>
            <li>
            ✔ Demonstrate controlled breath holding and release
            </li>
            <li>
            ✔ Kick 10 meters with support (front and back)
            </li>
            <li>
            ✔ Paddle stroke across short distances
            </li>
            <li>
            ✔ Swim 5–10 meters using Freestyle with a pop-up breath
            </li>
          <p>Upon graduation, swimmers may progress to Stroke Foundation or opt for semi-private refinement classes.</p>
          </ul>
        </div>
      </div>
          <NavLink className={`bg-yellow-600 text-white my-5 text-center py-3 text-xl font-bold w-100 rounded-md transform transform-all duration-150 hover:scale-110`}  to='/swimming-courses'>Back</NavLink>
      </div>

    </div>
  }
  /> */}
  <PageBannerPlusText
  img='learn.jpeg'
  bannerHeight="h-500"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="px-10 py-20 bg-black/60 w-[90%] backdrop-blur-sm rounded-md">
        <h1 className="text-5xl text-center my-10">LEAVE THE BEGINNER BEHIND,MOVE FORWARD</h1>
        <p className=" text-2xl  font-light">
          At Waves Swim Academy, we guide swimmers beyond the basics with our technique-focused programs. 
          Our Swim Strokes course is specifically designed for swimmers who are already comfortable in the 
          water and are ready to refine their skills, strengthen their technique, and build endurance in 
          Freestyle and Backstroke. With a month-long curriculum packed with drills, progressions, and 
          goal-based training, learners will elevate their swim game to the next level.
        </p>

        <p className="text-center mt-10 mb-3">WHO IS THIS COURSE FOR?</p>
        <ul className="text-xl font-light text-center space-x-10 my-4">
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

        <p className="text-xl font-light flex"> <p className="font-bold mr-5">Overview:</p>
        This one-month program focuses on stroke development, especially Freestyle with side breathing, 
        and introduces foundational Backstroke mechanics. Through skill progressions and targeted drills, 
        swimmers will develop breath control, proper body positioning, and efficient movement in the water.</p>

        <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
        <p className="text-xl text-center">
        Each session includes focused drills and practice in the following areas:
        </p>

        <div className="flex justify-center my-5 rounded-2xl">
        <ul className="font-light text-xl bg-black/70  py-10 px-10 w-[600px] rounded-2xl">
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
          <ul className="font- text-xl  bg-green-700  py-10 px-10 w-[600px] rounded-2xl">
            <li>
            ✔ Swim 25 meters Freestyle with at least 3 controlled side breaths
            </li>
            <li>
            ✔ Swim 10 meters Backstroke while maintaining surface alignment
            </li>
            <li>
            ✔ Kick 25 meters on the back using a kickboard with arms at the sides
            </li>
            <li>
            ✔ Kick 10 meters on the stomach in streamline without a kickboard
            </li>
          <p className="mt-5">Upon graduation, swimmers are encouraged to enroll in <strong>Advanced Swim Strokes</strong> for continued skill refinement and endurance training.</p>
          </ul>
        </div>
        <StrokeDisplay
        freestyle={true}
        backstroke={true}/>
      </div>
          <NavLink className={`bg-yellow-600 text-white my-5 text-center py-3 text-xl font-bold w-100 rounded-md transform transform-all duration-150 hover:scale-110`}  to='/swimming-courses'>Back</NavLink>
      </div>

    </div>
  }
/>

      </div>
  )
}