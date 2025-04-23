import PageBannerPlusText from "../../components/PageBannerPlusText"
import { NavLink } from "react-router-dom"
export default function LearnToSwim(){
  return (
<div className="">
  <PageBannerPlusText
  img='learn.jpeg'
  bannerHeight="h-400"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="px-10 py-20 bg-black/60 w-[90%] backdrop-blur-sm rounded-md">
        <h1 className="text-5xl text-center my-10">OUR LEARN TO SWIM PROGRAMS</h1>
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
  />
</div>
  ) 
}