import VideoPlusText from "../components/VideoPlusText";
import Footer from "../components/Footer";
import PageBannerPlusText from "../components/PageBannerPlusText";

export default function CompetetiveSwim(){
  return (
    <div className="">
      {/* <PageBannerPlusText img='race_.avif' text='Racing' imgClass=''/> */}
      <VideoPlusText img='racing.mp4' 
      text={
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-extrabold">SWIMMING AS A SPORT</h1>
        <h1 className="text-4xl font-light">INTRODUCTION TO COMPETITVE SWIMMING AND RACING</h1>
      </div>
      }/>
      <PageBannerPlusText 
      img="contact.jpg"
        bg="bg-black/30 backdrop-blur-2xl"
      bannerHeight="h-120"
      text={
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center w-[80%]">
          <h1 className="text-4xl font-extrabold my-10">HOW GOOD ARE WE?</h1>
          <p className="text-xl font-light ">At Waves Swim Academy,
              Where others follow the standard, we set it.
              Our swimmers have earned hundreds of medals at major District and State-level 
              championships,establishing us as a dominant force in the competitive swimming in Tamil Nadu.<br/>
              This tradition of excellence was ignited by our mentor, Kaavyashri—a trailblazer in 
              the pool who has personally secured over 100 State-level medals and nearly 25 National-
              level medals. <br/> Her remarkable journey continues to inspire every athlete who walks through 
              our doors.
              Today, under her expert guidance, we’ve nurtured a new generation of standout swimmers—
              athletes who’ve shattered State Records and claimed National-level victories, carrying 
              forward our legacy and continuously raising the bar.<br/>
              <p className="font-extrabold text-2xl">
              At Waves, we don’t just train swimmers—
              We create champions who lead the way.
              </p>
              </p>
          </div>
        </div>
      }
      />
      <PageBannerPlusText 
      img='map.avif'
      bg='bg-white'
      bannerHeight="h-350"
      text={
          <div className="text-black flex flex-col items-center">
            <div className="w-[80%] flex flex-col items-center space-y-2">
              <h1 className="text-4xl  font-extrabold my-10">HOW DO WE TURN BEGINNER INTO AN ATHLETE?</h1>
              <h1 className="text-2xl  font-semibold my-2">WE EXPEXT THE SWIMMERS TO HAVE ALL THE GRADUATION SKILLS OF STROKE SCHOOL TO PURSE</h1>
              <p className="font-light text-xl">
              At Waves Swim Academy, every champion starts with a single stroke. Our training philosophy is grounded in a 
              progressive, science-backed approach that transforms raw potential into athletic excellence. 
              </p>
              <p className="font-light text-xl">
              We always value every swimmer—whether they’re just starting out or already dreaming of the podium. 
              Our programs are designed to recognize individual strengths and guide each athlete through a structured 
              journey toward excellence.
              </p>
          </div>
          <div className="w-[80%] my-5"> 
          <div className="text-black my-2 flex flex-col space-y-3">
            <p className="font-extrabold text-xl">HERE'S HOW WE MAKE IT HAPPEN,</p>
            <div className="font-light">
              <p className="text-xl mx-4 font-semibold">
                THE STAGE OF PRELIMINARY SPORT PREPARATION OBJECTIVES
              </p>
              <ul className="text-xl list-inside list-disc mx-4">
                <li>
                  Identification of basic morphological criteria (e.g., body type, proportions, height, weight, buoyancy) and some elementary characteristics of motor talent for swimming.
                </li>
                 <li>
                  Formation of a stable interest toward swimming.
                </li>
                <li>
                  Learning of basic swimming techniques and a wide variety of motor skills. Health improvement.
                </li>
              </ul>
            </div>

            <div className="font-light">
              <p className="text-xl mx-4 font-semibold">
              THE STAGE OF BASIC TRAINING OBJECTIVES
              </p>
              <ul className="text-xl list-inside list-disc mx-4">
                <li>
                  Development of general motor abilities and a functional foundation for swimming.
                </li>
                 <li>
                  Identification of the most gifted young swimmers on the basis of morphological criteria, indications of endurance, and pulling strength of a general and specific nature.
                </li>
                <li>
                  Perfection of technical swimming skills in all strokes with gradual specialization in at least two strokes.
                </li>
                <li>
                  Formation of a positive attitude toward regular training.
                </li>
              </ul>
            </div>

            <div className="font-light">
              <p className="text-xl mx-4 font-semibold">
              THE STAGE OF SPECIALIZATION OBJECTIVES
              </p>
              <ul className="text-xl list-inside list-disc mx-4">
                <li>
                  To raise the general functional level and prepare for maximal training workloads.
                </li>
                 <li>
                  To perfect the technical and tactical skills to autonomic level.
                </li>
                <li>
                  To develop strong acceptance of and stable motivation toward intensive training and full commitment toward swimming.
                </li>
              </ul>
            </div>

            <div className="font-light">
              <p className="text-xl mx-4 font-semibold">
              THE STAGE OF EXCELLENCE OBJECTIVES
              </p>
              <ul className="text-xl list-inside list-disc mx-4">
                <li>
                  To master individualized training workloads that will result in high performance levels.
                </li>
                 <li>
                  To maintain a high level of general functional abilities.
                </li>
                <li>
                  To maximize special functional and motor abilities, and technical and tactical skills.
                </li>
                <li>
                  To maintain strong motivation toward competing.
                </li>
              </ul>
            </div>

          </div>
          </div>
          <div className="w-[80%] my-5">
            <div className="grid grid-cols-4 space-x-2">
              <img src="/learn.jpeg" alt="" className="h-50 rounded-md"/>
              <img src="/learn.jpeg" alt="" className="h-50 rounded-md"/>
              <img src="/learn.jpeg" alt="" className="h-50 rounded-md"/>
              <img src="/learn.jpeg" alt="" className="h-50 rounded-md"/>
            </div>
          </div>

          </div>


      }
      />  
      
      <Footer/>
    </div>
  )
}
