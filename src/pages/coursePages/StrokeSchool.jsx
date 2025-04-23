import PageBannerPlusText from "../../components/PageBannerPlusText"
import { NavLink } from "react-router-dom"
import StrokeDisplay from "../../components/StrokeDisplay"
export default function StrokeSchool(){
  return (
    <div className="">
      <PageBannerPlusText
  img="learn.jpeg"
  bannerHeight="h-500"
  text={
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-10 py-20 bg-black/60 w-[90%] backdrop-blur-sm rounded-md">
          <h1 className="text-5xl text-center my-10">STROKE SCHOOL — BUILDING FUTURE CHAMPIONS</h1>
          
          <p className="text-2xl font-light">
            Our 12-month Stroke School program is a transformative journey for swimmers who aspire to swim with confidence, technique, and competitive spirit. 
            Unlike typical swim lessons, this program dives deeper — we don’t just teach how to swim, we teach the *sport* of swimming. 
            Through expert coaching, fun practices, and technical drills, students grow into well-rounded swimmers.
          </p>

          <p className="text-center mt-10 mb-3">WHO IS THIS COURSE FOR?</p>
          <ul className="text-xl font-light text-center space-x-10 my-4">
            <li>GRADUATES OF ADVANCED COURSES</li>
            <li>COMPETENT SWIMMERS AGES 8+</li>
            <li>ATHLETES READY FOR PRE-COMPETITIVE TRAINING</li>
          </ul>

          <p className="text-xl font-light flex">
            <p className="font-bold mr-5">Overview:</p>
            This year-long curriculum is all about building precision in strokes, mastering competitive skills, and fostering a love for the sport. 
            Swimmers are guided through detailed technical work across all four strokes, along with race strategies, etiquette, and turns.
          </p>

          <p className="text-2xl text-center mt-10 mb-2">SKILL PROGRESSION</p>
          <p className="text-xl text-center">
            Throughout the program, swimmers will practice:
          </p>

          <div className="flex justify-center my-5 rounded-2xl">
            <ul className="font-light text-xl bg-black/70 py-10 px-10 w-[600px] rounded-2xl">
              <li>Freestyle, Backstroke, Breaststroke, and Butterfly refinement</li>
              <li>Competitive diving starts</li>
              <li>Flip turns and touch turns for all strokes</li>
              <li>Stroke efficiency and swimming etiquette</li>
              <li>Racing strategies and interval training introduction</li>
            </ul>
          </div>

          <p className="text-2xl text-center mt-10 mb-2">GRADUATION SKILL</p>
          <div className="flex justify-center my-5 rounded-2xl">
            <ul className="text-xl bg-green-700 py-10 px-10 w-[600px] rounded-2xl">
              <li>✔ Swim all four strokes with refined technique</li>
              <li>✔ Master basic racing starts and flip turns</li>
              <li>✔ Execute Individual Medley sets with confidence</li>
              <li>✔ Understand race strategy, stroke count, and pace control</li>
              <li>✔ Become ready for club-level or pre-competitive swim squads</li>
              <p className="mt-5">
                Upon completion, swimmers can seamlessly transition into performance-focused coaching or competitive swimming.
              </p>
            </ul>
          </div><StrokeDisplay
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