import PageBannerPlusText from "../../components/PageBannerPlusText"
import { NavLink } from "react-router-dom"
export default function LearnToSwim(){
  return (
<div className="">
  <PageBannerPlusText
   img="contact.jpg"
   bg="bg-black/30 backdrop-blur-md"
   text={
    <div>
        <h1 className="text-4xl text-center my-10"> OUR LEARN TO SWIM PROGRAMS</h1>
    </div>
   }
  />
  <PageBannerPlusText
  bannerHeight="h-400"
  img='contact_1.jpg'
  bg="bg-black/30 backdrop-blur-xl"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="px-10 py-20 pt-10 bg-gray-100 text-black border-2 shadow-xl w-[90%] backdrop-blur-sm rounded-xl">
      <div className="flex flex-col justify-center">
        <div className=" mt-0 mb-10 text-3xl"> 
          <NavLink to='/swimming-courses' className='hover:bg-white hover:border-2 px-2 py-1 rounded-4xl hover:scale-110 transition-all duration-150'>
          &#8592;
          </NavLink>
          </div>
        <p className="text-justify text-2xl px-3 font-light">
          At Waves Swim Academy, we believe in building a strong swimming foundation
          through structured, engaging, and safe instruction. Our Learn to Swim programs
          are designed for all ages—children, adults, and women—offering flexible options
          to suit every lifestyle and comfort level. Whether you're stepping into
          the water for the first time or returning after a break, our goal is to help
          you swim confidently and independently through skill-based progression.
        </p>
      </div>

      <div className="flex flex-col items-center my-15 mb-8 ">
        <p className="text-center">WHO CAN TAKE THIS COURSE?</p>
        <ul className="text-xl my-5 list-decimal font-light  space-x-10">
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
      </div>

<div className="bg-gray-100 px-4 py-2 rounded-md">
        <p className="text-xl font-light"><b className="font-bold mr-3">Overview:</b>
        These entry-level group classes are conducted in a supportive, small-group setting. 
        Each session is built on core water safety, body positioning, breath control, and 
        stroke development.
        </p>
</div>

        <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
        <p className="text-xl font-semibold text-center">
        Each class follows a structured curriculum focusing on:
        </p>

        <div className="flex justify-center my-5 rounded-2xl">
        <ul className="font-light text-xl bg-gray-100 border-2 shadow-sm  list-disc py-10 px-10 w-[600px] rounded-2xl">
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
        <div className="flex flex-col items-center justify-center my-5 rounded-2xl">
          <div className="bg-green-50 border-2 shadow rounded-xl">
          <ul className="font- text-xl list-disc font-light py-10 px-10 w-[600px] rounded-2xl">
            <li>
             Comfortable underwater submersion
            </li>
            <li>
             Demonstrate controlled breath holding and release
            </li>
            <li>
             Kick 10 meters with support (front and back)
            </li>
            <li>
             Paddle stroke across short distances
            </li>
            <li>
             Swim 5–10 meters using Freestyle with a pop-up breath
            </li>
          </ul>
          </div>
          <div className="w-[80%] my-5">
          <p className="text-lg font-semibold">Upon graduation, swimmers may progress to Stroke Foundation or opt for semi-private refinement classes.</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
        <div className="w-[80%]  flex justify-center">
          <NavLink className={`bg-[#041E42] text-white my-2 text-center py-3 px-15 text-xl font-bold w-[200px] rounded-lg transform transform-all duration-150 hover:scale-110`}  to='/swimming-courses'>Back</NavLink>
        </div>
        </div>
      </div>
      </div>

    </div>
  }
  />
</div>
  ) 
}