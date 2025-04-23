import Footer from "../components/Footer";
import PageBannerPlusText from "../components/PageBannerPlusText";

export default function AboutUs() {
    return (
        <div className="">
            <PageBannerPlusText img='ripple_1.avif' text='About Us'/>
            <div className="flex justify-center">
                <p className="w-[80%] text-lg font-semibold" >
                    At Waves Swim Academy, we believe that every great swimmer starts with a confident first stroke. 
                    Our core strength lies in our “Learn to Swim” programs — designed to help children and adults 
                    build water confidence, master foundational techniques, and develop a lifelong love for swimming. 
                    We don’t just teach people how to swim — we nurture discipline, safety, and skill from the very beginning, 
                    laying the groundwork for long-term athletic growth.<br/>
                    With nearly a decade of experience in developing swimmers from beginners to champions, Waves has become 
                    Chennai’s leading center for high-performance aquatic training. Our academy features FINA-standard pools 
                    and a coaching curriculum built on international best practices, ensuring that our athletes are trained 
                    to meet and exceed global standards. Guided by certified professionals and mentored by nationally acclaimed 
                    swimmers, we continue to shape the next generation of competitive talent — one swimmer at a time.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="self-center flex flex-col justify-center items-center w-[80%] bg-blue-700/70 backdrop-blur-xl py-10 rounded-3xl my-5">
                    <img src="/profile.avif" alt="" className="h-100 rounded-xl"/>
                    <div className="text-lg font-bold flex flex-col justify-center w-[90%] space-y-3 py-5">
                        <p className="text-center">
                            Founded by Anbumani Ayyavoo in 2015, a visionary dedicated to raising 
                            the standards of swimming in Chennai, our academy was born out of a personal 
                            journey and a powerful mission. It all began when his daughter emerged as a 
                            National Medalist — a moment of pride that ignited a dream. Witnessing the impact
                            of world-class training on her success, Mr. Anbumani was inspired to make that same 
                            level of excellence accessible to every aspiring swimmer.
                        </p>
                        <p className="text-center">
                            Determined to bridge the gap, he established this academy with the goal of delivering 
                            American Standards in swimming coaching, right here in Chennai. Tragically, he passed 
                            away in 2021 due to COVID-19 and was not able to see through the end of the journey. 
                            But today, we proudly carry forward his vision and follow in his footsteps — committed to 
                            continuing the legacy he began.
                        </p>
                        <p className="text-center">
                            We’re not just a training center. 
                            We’re a community, a launchpad, and a home 
                            for future champions.
                        </p>
                    </div>
                </div>
                <div className="self-center flex flex-col justify-center items-center w-[80%] bg-blue-700/70 backdrop-blur-xl py-10 rounded-3xl my-5">
                    <img src="/profile.avif" alt="" className="h-100 rounded-xl"/>
                    <div className="text-lg font-bold flex flex-col justify-center w-[90%] space-y-3 py-5">
                        <p>Meet Our Mentor – Kaavyashri Anbumani</p>
                        <p className="text-center">
                            Kaavyashri Anbumani’s journey in the world of swimming began at just 6 years old. 
                            From 2006 to 2019, she was an elite-level swimmer who proudly represented Tamil Nadu 
                            at national championships for over a decade. Her consistent performance and dedication 
                            earned her invitations to National Team trials—marking her as one of the state’s finest athletes.
                        </p>
                        <p className="text-center">
                            To further her development, her father, Mr. Anbumani, ensured she received advanced training in the 
                            United States, where she was exposed to international coaching standards. After retiring from 
                            her competitive career, Kaavyashri naturally transitioned into mentoring, driven by her passion to 
                            shape the next generation of swimmers.
                        </p>
                        <p className="text-center">
                            In 2019, she earned her ASCA (American Swimming Coaches Association) Level 1 to 5 certifications in 
                            Dubai, becoming a globally accredited coach. Since then, she has worked closely with our U.S.-based 
                            consultant, staying ahead with the latest in swim science and technique.
                        </p>
                        <p className="text-center">
                            Currently, Kaavyashri is pursuing her Ph.D. in Biomedical Engineering, with her research centered around
                            Neuroscience. Despite her academic pursuits, she continues to lead from the front—regularly coordinating 
                            with our coaching team and guiding the academy’s training vision as our Mentor.
                        </p>
                        <p className="text-center">
                            Her unique blend of international experience, scientific insight, and deep-rooted love for the sport makes 
                            her an exceptional guide for every swimmer who walks through our doors.
                        </p>
                    </div>
                </div>
                {/* Timings Component */}
                <div className="w-[80%]">
                    <div className="bg-blue-600/30 w-full py-10 px-10 rounded-xl font-extrabold">
                        <p className="text-2xl font-extrabold text-center">
                            Given below is the schedule for the ongoing learn to swim 
                            which also has an exclusive timing for ladies to be conducted 
                            by a lady swim coach.
                        </p>
                        <div className="w-full flex my-10">
                            <div className="w-6/12 flex flex-col justify-center items-center space-y-3 text-lg font-bold">
                            <p>
                                06.00 A.M - 07.00 A.M
                            </p>
                            <p>
                                07.00 A.M - 08.00 A.M
                            </p>
                            <p>
                                08.00 A.M - 09.00 A.M
                            </p>
                            <p>
                                09.00 A.M - 10.00 A.M
                            </p>
                            <p> 
                               10.30 A.M - 11.30 A.M
                            </p>
                            </div>
                            <div className="w-6/12 flex flex-col justify-center items-center space-y-3">
                            <p>
                                03.00 P.M - 04.00 P.M;
                            </p>
                            <p>
                                04.00 P.M - 05.00 P.M;
                            </p>
                            <p>
                                05.00 P.M - 06.00 P.M;
                            </p>
                            <p>
                                06.00 P.M - 07.00 P.M;
                            </p>
                            <p>
                               07.00 P.M - 08.00 P.M;
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <p className="text-lg font-bold text-center">
                            This wonderful facility is located at No.92, M.K. Nagar Main Road, Zamin Pallavaram,
                            Chennai -  600117 (Off 200 feet Pallavaram - Thoraipakkam Radial Road), about a kilometer 
                            on the right side from Kilkattalai – Thoraipakkam Radial Road junction. The size of the pool 
                            is 25m x 12m x 1.2m divided into six lanes each of 2m.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }
  