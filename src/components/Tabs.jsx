import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import PageBannerPlusText from "./PageBannerPlusText"
import { ScrollArea } from "./ui/scroll-area"

export default function NativeTabs(){
    return (
      <div className="w-screen flex justify-center ">
        <div className="h-full w-[80%] flex justify-center">
      <Tabs defaultValue="about" className="w-full h-full flex items-center  py-10 ">
        <TabsList className='h-15 w-full my-2'>
          <TabsTrigger value="about" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42] mx-'>ABOUT</TabsTrigger>
          <TabsTrigger value="founders" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42] mx-'>FOUNDERS</TabsTrigger>
          <TabsTrigger value="team" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42]'>MEET THE TEAM</TabsTrigger>
          <TabsTrigger value="policies" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42]'>POLICIES</TabsTrigger>
          <TabsTrigger value="terms" className='font-extrabold bg-[#041E42] text-white data-[state=active]:text-[#041E42]'>TERMS & CONDITIONS</TabsTrigger>
        </TabsList>
        <TabsContent value="about"className=' w-screen text-[#005A9C] rounded-md flex justify-center'>
          <div className="w-[95%] h-[90%]">
            <PageBannerPlusText
            img="contact.jpg"
        bg="bg-black/30 backdrop-blur-2xl"
            // bg="bg-[#005A9C]"
            bannerHeight="h-150"
            text={
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-end"> 
                  <p className="text-5xl text-blue-700 font-[abel]">W</p>
                  <p className="mr-3 font-light">e</p>

                  <p className="text-5xl text-blue-700 font-[abel]">A</p>
                  <p  className="mr-3  font-light">lways</p>

                  <p className="text-5xl text-blue-700 font-[abel]">V</p>
                  <p  className="mr-3  font-light">alue</p>
                  
                  <p className="text-5xl text-blue-700 font-[abel]">E</p>
                  <p  className="mr-3  font-light">very</p>

                  <p className="text-5xl text-blue-700 font-[abel]">S</p>
                  <p  className="mr-3  font-light">wimmer</p>
                </div>
                <p className="w-[90%] text-xl font-light">
                    At Waves Swim Academy, we believe that every great swimmer starts with a confident first stroke. 
                    Our core strength lies in our “Learn to Swim” programs — designed to help children and adults 
                    build water confidence, master foundational techniques, and develop a lifelong love for swimming. 
                    We don’t just teach people how to swim — we nurture discipline, safety, and skill from the very beginning, 
                    laying the groundwork for long-term athletic growth.
                </p>
                <p className="w-[90%] text-xl font-light">
                    With nearly a decade of experience in developing swimmers from beginners to champions, Waves has become 
                    Chennai’s leading center for high-performance aquatic training. Our academy features FINA-standard pools 
                    and a coaching curriculum built on international best practices, ensuring that our athletes are trained 
                    to meet and exceed global standards. Guided by certified professionals and mentored by nationally acclaimed 
                    swimmers, we continue to shape the next generation of competitive talent — one swimmer at a time.
                </p>
              </div>
            }/>
          </div>
        </TabsContent>

        <TabsContent value="founders" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='contact.jpg'
        bg="bg-black/30 backdrop-blur-2xl"

            bannerHeight="h-700"
            text={
              <div>
                <div className="flex flex-col items-center justify-center space-y-10">
                <div className="bg-black/20 backdrop-blur-md rounded-xl w-[80%] text-black py-10 px-5 flex flex-col items-center">
                  <h1 className="my-3 text-white/90">
                    OUR FOUNDER  
                  </h1>
                  <div className="flex flex-col items-center">
                    <img src="anbumani.heic" alt="" className=" h-80"/>
                    <p className="text-2xl font-semibold my-2 text-white/90"> Mr. ANBUMANI AYYAVOO</p>
                  </div>
                  <div className=" space-y-3 w-[90%] my-5 text-white/80">
                  <p className="text-xl text-justify font-light">A visionary dedicated to raising the standards of swimming in Chennai, 
                    our academy was born out of a personal journey and a powerful mission. It all began when his daughter emerged 
                    as a National Medalist — a moment of pride that ignited a dream. Witnessing the impact of world-class training 
                    on her success, Mr. Anbumani was inspired to make that same level of excellence accessible to every aspiring swimmer.
                  </p>
                  <p className="text-justify text-lg font-light">
                    Determined to bridge the gap, he established this academy with the goal of delivering American Standards in swimming coaching, 
                    right here in Chennai. Though he is no longer with us to witness the full impact of his vision, his spirit and passion continue
                    to guide everything we do. Today, we proudly carry forward his legacy — committed to nurturing talent and transforming the
                    future of swimming in our city.
                  </p>
                  </div>
                </div> 

                <div className="bg-black/20 backdrop-blur-md rounded-xl w-[80%] text-black py-10 px-5 flex flex-col items-center">
                  <h1 className="my-3 text-white/90">
                    Our Co-Founder & Managing Director
                  </h1>
                  <div className="flex flex-col items-center">
                    <img src="sunanthini.jpeg" alt="" className=" h-80"/>
                    <p className="text-2xl font-semibold my-2 text-white/90"> Mrs. SUNANTHINI ANBUMANI </p>
                  </div>
                  <div className=" space-y-3 w-[90%] my-5 text-white/80">
                  <p className="text-xl text-justify font-light">An accomplished architect turned visionary entrepreneur, 
                    Mrs. Sunanthini Anbumani has been the backbone of the academy since day one. As the wife and closest partner of the founder,
                    she walked every step of the journey by his side, sharing not just the vision, but the determination to bring it to life.   
                  </p>
                  <p className="text-justify text-lg font-light">
                  After his absence, it was her unwavering commitment and leadership that propelled the academy forward. She is the reason 
                    we’ve expanded into new branches and reached more aspiring swimmers than ever before. With a sharp eye for excellence and a 
                    heart deeply rooted in the academy’s mission, Mrs. Sunanthini Anbumani continues to carry the vision forward — building on the legacy and 
                    turning dreams into reality.
                  </p>
                  </div>
                </div> 

                <div className="bg-black/20 backdrop-blur-md rounded-xl w-[80%] text-black py-10 px-5 flex flex-col items-center">
                  <h1 className="my-3 text-white/90">
                    OUR MENTOR 
                  </h1>
                  <div className="flex flex-col items-center">
                    <img src="kaavya.jpeg" alt="" className=" h-80 rounded-2xl"/>
                    <p className="text-2xl font-semibold my-2 text-white/90 ">KAAVYASHRI ANBUMANI </p>
                  </div>
                  <div className=" space-y-3 w-[90%] my-5 text-white/80">
                  <p className="text-xl text-justify font-light">
                    Kaavyashri Anbumani’s journey in the world of swimming began at just 6 years old. 
                    From 2006 to 2019, she was an elite-level swimmer who proudly represented Tamil Nadu 
                    at national championships for over a decade. Her consistent performance and dedication 
                    earned her invitations to National Team trials—marking her as one of the state’s finest athletes.
                  </p>
                  <p className="text-justify text-lg font-light">
                  To further her development, her father, Mr. Anbumani, ensured she received advanced training in the 
                  United States, where she was exposed to international coaching standards. After retiring from 
                  her competitive career, Kaavyashri naturally transitioned into mentoring, driven by her passion to 
                  shape the next generation of swimmers.
                  </p>
                  <p className="text-justify text-lg font-light">
                            In 2019, she earned her ASCA (American Swimming Coaches Association) Level 1 to 5 certifications in 
                            Dubai, becoming a globally accredited coach. Since then, she has worked closely with our U.S.-based 
                            consultant, staying ahead with the latest in swim science and technique.
                        </p>
                        <p className="text-justify text-lg font-light">
                            Currently, Kaavyashri is pursuing her Ph.D. in Biomedical Engineering, with her research centered around
                            Neuroscience. Despite her academic pursuits, she continues to lead from the front—regularly coordinating 
                            with our coaching team and guiding the academy’s training vision as our Mentor.
                        </p>
                        <p className="text-justify text-lg font-light">
                            Her unique blend of international experience, scientific insight, and deep-rooted love for the sport makes 
                            her an exceptional guide for every swimmer who walks through our doors.
                        </p>
                  </div>
                </div> 
           
                </div>
              </div>
            }
            />
          </div>
        </TabsContent>

        <TabsContent value="policies" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='map.avif'
            bg='bg-white'
            bannerHeight="h-150"
            text={
              <div className="flex justify-center">
                <ScrollArea className="h-[600px] w-[85%] rounded-md border p-4 my-10">
                  <h1 className="font-extrabold text-black text-center my-10">OUR POLICIES</h1>
                <div className="text-lg text-black text-center px-4 py-4 w-full">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ipsum quasi error delectus eos expedita laborum numquam impedit est asperiores amet, tempore perferendis vero odit illo totam. Exercitationem, unde consequatur.
                    Asperiores reprehenderit quisquam animi tenetur vel mollitia, nam omnis delectus ea autem enim sed molestiae labore. Velit recusandae consequuntur ex, delectus deleniti dolorum quis cumque! Quaerat doloremque eaque aliquid saepe?
                    Expedita unde numquam error est, voluptas dolores quibusdam molestiae aut laborum voluptate temporibus explicabo excepturi sequi tenetur quos officiis libero accusamus asperiores consequatur. Nemo illum quod aliquam, pariatur ducimus quos.
                    Quod, distinctio. Iure facere sapiente voluptates sed placeat ut est voluptatibus cupiditate provident delectus expedita, impedit illum nesciunt labore fuga! Neque deserunt itaque cupiditate culpa, quidem a voluptas harum perspiciatis!
                    Labore, unde similique. Possimus, commodi architecto. Itaque quasi, omnis sint neque enim quia, ipsum mollitia, hic delectus quis reiciendis sit nulla nam aspernatur dolore perferendis quaerat ea? Optio, distinctio voluptatem.
                    Cum laboriosam natus recusandae fuga, tempora voluptas totam soluta assumenda, unde quasi sequi adipisci facilis ad maiores dicta aut nesciunt placeat saepe eum officia ipsum. Quasi optio magnam omnis harum?
                    Eos, numquam illo optio commodi molestias sapiente ea dolore porro possimus ratione. Odit asperiores nesciunt reiciendis molestias perferendis error quis porro, recusandae repellat nam autem et laboriosam nobis esse ex?
                    Incidunt neque corporis aspernatur inventore eaque. Provident aperiam unde sapiente animi expedita blanditiis ea voluptas odio accusamus fugiat placeat saepe atque cupiditate quis maiores explicabo, odit voluptatibus asperiores non veniam!
                    Repellendus iste distinctio dignissimos ex voluptatem excepturi labore odio quis architecto sunt provident qui animi quisquam voluptatibus adipisci nobis suscipit dolorum in reprehenderit, perferendis quibusdam ipsa laboriosam? Reprehenderit, eius cumque.
                    Possimus ut omnis officiis fuga maiores eveniet animi magni explicabo voluptatem repellendus! Fugiat impedit nulla non alias, exercitationem odio ullam facilis esse obcaecati numquam? Fuga quae omnis dolore nemo ipsam.
                    Consequatur quaerat ab optio soluta, laudantium ducimus maxime vero, omnis reprehenderit eius ipsam nisi ad aperiam exercitationem magnam explicabo hic commodi voluptates. Asperiores incidunt omnis error, sint ratione vel dignissimos?
                    Quia, voluptates laudantium? Odio, sapiente. Esse sequi saepe, quis similique enim labore cupiditate dolorem dicta veritatis ipsa hic unde porro odio aliquid inventore accusantium officiis, quasi eveniet iste eligendi quisquam.
                    Blanditiis sint nihil consequatur. Quo, iusto quaerat. Dolorum enim quibusdam excepturi eaque magni maxime tempore iste velit tenetur dignissimos, itaque quidem exercitationem id quasi quos eum! Sapiente provident nihil accusantium.
                    Soluta doloribus blanditiis tenetur adipisci reprehenderit sequi illum sit. Illum rem nesciunt magnam nemo, ipsum dolore ratione! Placeat dolor, molestias, animi fugiat id vitae sint quaerat blanditiis, repellendus deserunt hic.
                    Molestiae, voluptatum doloribus enim optio repellat minima fuga sapiente! Consequatur minima officiis eligendi inventore iure animi delectus iusto laboriosam explicabo. Sequi cupiditate, tempore eligendi enim deserunt minus nulla corporis tenetur!
                    Eos, ducimus? Accusantium vitae quos nisi fugit aperiam excepturi amet corrupti aliquam, quasi repellendus doloremque quia minima, delectus sit nobis blanditiis non. Quibusdam non nobis alias aut unde magni maiores.
                    Maiores quia quam repellendus praesentium similique ipsum. Quasi maiores, atque voluptatibus illum commodi sed sit deserunt labore laboriosam suscipit alias, id sequi, ratione animi quo ducimus libero necessitatibus delectus tempore.
                    Impedit, ad. Architecto cupiditate libero aliquid iste. Laboriosam aut quasi temporibus? Placeat, dicta iste neque, quo, reprehenderit ipsa labore est aliquid suscipit sapiente odit voluptates magnam. Eius repellendus quisquam debitis?
                    Sapiente, temporibus fugiat maxime expedita accusantium corporis nostrum, corrupti distinctio voluptates sunt culpa architecto voluptatum harum. Reiciendis ipsum dicta nesciunt ullam repellendus commodi recusandae accusantium quidem, repellat aliquam, et odit!
                    Rerum, illo excepturi fugiat autem suscipit voluptas porro ipsam doloremque reiciendis quis eligendi, culpa et eum aliquid accusantium sed amet assumenda architecto fugit voluptate impedit alias. Ad sapiente esse illo.
                    Ad assumenda nihil ducimus labore repellat, unde nesciunt. Id ipsam in dolore facilis quisquam non corporis aperiam amet repudiandae nihil possimus soluta deserunt necessitatibus exercitationem iure corrupti, doloribus minus! Voluptatem.
                    Vero fugit adipisci culpa beatae obcaecati, ratione corrupti laborum non iusto repudiandae illo unde quasi repellat delectus ad sint laudantium voluptates vel accusantium expedita nobis explicabo illum quos! Omnis, beatae!
                    Qui eius veniam repudiandae doloribus nesciunt magnam, assumenda cupiditate commodi temporibus repellendus animi nostrum itaque quasi maiores pariatur facere provident nisi! Laboriosam explicabo asperiores laudantium possimus deserunt, ab deleniti? Vero.
                    Cupiditate eaque nisi debitis reprehenderit dolores eligendi earum id! Expedita nemo aliquam cupiditate voluptas facilis, doloremque quis eum assumenda id magnam? Aspernatur excepturi impedit assumenda eaque. Excepturi, voluptates ut? Praesentium.
                    Odit et deserunt itaque delectus enim aperiam quibusdam facere, consequuntur deleniti maxime? Eos quisquam assumenda, architecto perspiciatis dicta illo suscipit ex deleniti tempora vel, at magnam unde. Eius, totam vero?
                    Tenetur, error soluta necessitatibus dolor aperiam laborum molestias officiis earum recusandae magni quaerat commodi quis quidem, quos ab, vel repellat voluptates nesciunt distinctio modi debitis. Error obcaecati excepturi dolore sunt?
                    Modi, illum? Ipsum exercitationem ea non laudantium deserunt numquam at inventore ratione, tempora deleniti cum? Provident, id cumque architecto ipsam magnam repellat reprehenderit exercitationem molestiae nisi accusantium necessitatibus beatae illo.
                    Excepturi animi natus sint ipsum corporis mollitia ducimus non exercitationem magnam autem consequuntur illum, voluptatibus iure nihil minus consectetur ab! Officiis at autem odit officia beatae tenetur itaque nihil nesciunt.
                    Quam, fugit dolorum odio eos aut provident ratione et placeat voluptatem illo aliquid ipsa totam autem tempora? Aliquid assumenda dignissimos commodi eligendi laboriosam cumque excepturi fugiat, praesentium asperiores libero aliquam.
                    Facere voluptas assumenda ad doloribus fuga, sequi, explicabo illum impedit magnam cum cumque ducimus unde, doloremque nulla ex alias! Consequuntur error architecto esse nostrum minus sint qui sit beatae quo?
                </div>
            </ScrollArea>
              </div>
            }/>
          </div>
        </TabsContent>


        <TabsContent value="team" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='contact.jpg'
        bg="bg-black/30 backdrop-blur-2xl"
          
            bannerHeight="h-750"
            text={
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl my-10 pt-20">OUR COACHES AND TRAINERS</h1>

                <div className="grid grid-cols-2 space-x-10 space-y-10">
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md w-[500px] py-5 px-2 rounded-xl">
                    <div className="flex flex-col items-center mt-5 p-5">
                      <img src="profile.avif" alt="" className="h-60 rounded-md" />
                      <h1 className="text-2xl my-2">Enter Name here</h1>
                      <h1 className="text-xl font-semibold">Designation, bracnch</h1>
                    </div>
                    <p className="text-lg text-justify font-light p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium aut voluptatum. 
                      Ducimus, quam. Rerum optio quae eum, necessitatibus assumenda facere sint saepe, nulla, 
                      magnam soluta aperiam voluptatum. Tempora, explicabo.
                      labore itaque et rem reprehenderit, nisi vitae suscipit enim a.
                    </p>
                  </div>
              
              
                </div>
              </div>
            }/>
          </div>
        </TabsContent>
        <TabsContent value="terms" className='w-screen text-[#005A9C] rounded-md flex justify-center'>
        <div className="w-[90%] h-[90%]">
            <PageBannerPlusText
            img='map.avif'
            bg='bg-white'
            bannerHeight="h-150"
            text={
              <div className="flex justify-center">
                <ScrollArea className="h-[600px] w-[85%] rounded-md border p-4 my-10">
                  <h1 className="font-extrabold text-black text-center my-10">TERMS & CONDITIONS</h1>
                <div className="text-lg text-black text-center px-4 py-4 w-full">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ipsum quasi error delectus eos expedita laborum numquam impedit est asperiores amet, tempore perferendis vero odit illo totam. Exercitationem, unde consequatur.
                    Asperiores reprehenderit quisquam animi tenetur vel mollitia, nam omnis delectus ea autem enim sed molestiae labore. Velit recusandae consequuntur ex, delectus deleniti dolorum quis cumque! Quaerat doloremque eaque aliquid saepe?
                    Expedita unde numquam error est, voluptas dolores quibusdam molestiae aut laborum voluptate temporibus explicabo excepturi sequi tenetur quos officiis libero accusamus asperiores consequatur. Nemo illum quod aliquam, pariatur ducimus quos.
                    Quod, distinctio. Iure facere sapiente voluptates sed placeat ut est voluptatibus cupiditate provident delectus expedita, impedit illum nesciunt labore fuga! Neque deserunt itaque cupiditate culpa, quidem a voluptas harum perspiciatis!
                    Labore, unde similique. Possimus, commodi architecto. Itaque quasi, omnis sint neque enim quia, ipsum mollitia, hic delectus quis reiciendis sit nulla nam aspernatur dolore perferendis quaerat ea? Optio, distinctio voluptatem.
                    Cum laboriosam natus recusandae fuga, tempora voluptas totam soluta assumenda, unde quasi sequi adipisci facilis ad maiores dicta aut nesciunt placeat saepe eum officia ipsum. Quasi optio magnam omnis harum?
                    Eos, numquam illo optio commodi molestias sapiente ea dolore porro possimus ratione. Odit asperiores nesciunt reiciendis molestias perferendis error quis porro, recusandae repellat nam autem et laboriosam nobis esse ex?
                    Incidunt neque corporis aspernatur inventore eaque. Provident aperiam unde sapiente animi expedita blanditiis ea voluptas odio accusamus fugiat placeat saepe atque cupiditate quis maiores explicabo, odit voluptatibus asperiores non veniam!
                    Repellendus iste distinctio dignissimos ex voluptatem excepturi labore odio quis architecto sunt provident qui animi quisquam voluptatibus adipisci nobis suscipit dolorum in reprehenderit, perferendis quibusdam ipsa laboriosam? Reprehenderit, eius cumque.
                    Possimus ut omnis officiis fuga maiores eveniet animi magni explicabo voluptatem repellendus! Fugiat impedit nulla non alias, exercitationem odio ullam facilis esse obcaecati numquam? Fuga quae omnis dolore nemo ipsam.
                    Consequatur quaerat ab optio soluta, laudantium ducimus maxime vero, omnis reprehenderit eius ipsam nisi ad aperiam exercitationem magnam explicabo hic commodi voluptates. Asperiores incidunt omnis error, sint ratione vel dignissimos?
                    Quia, voluptates laudantium? Odio, sapiente. Esse sequi saepe, quis similique enim labore cupiditate dolorem dicta veritatis ipsa hic unde porro odio aliquid inventore accusantium officiis, quasi eveniet iste eligendi quisquam.
                    Blanditiis sint nihil consequatur. Quo, iusto quaerat. Dolorum enim quibusdam excepturi eaque magni maxime tempore iste velit tenetur dignissimos, itaque quidem exercitationem id quasi quos eum! Sapiente provident nihil accusantium.
                    Soluta doloribus blanditiis tenetur adipisci reprehenderit sequi illum sit. Illum rem nesciunt magnam nemo, ipsum dolore ratione! Placeat dolor, molestias, animi fugiat id vitae sint quaerat blanditiis, repellendus deserunt hic.
                    Molestiae, voluptatum doloribus enim optio repellat minima fuga sapiente! Consequatur minima officiis eligendi inventore iure animi delectus iusto laboriosam explicabo. Sequi cupiditate, tempore eligendi enim deserunt minus nulla corporis tenetur!
                    Eos, ducimus? Accusantium vitae quos nisi fugit aperiam excepturi amet corrupti aliquam, quasi repellendus doloremque quia minima, delectus sit nobis blanditiis non. Quibusdam non nobis alias aut unde magni maiores.
                    Maiores quia quam repellendus praesentium similique ipsum. Quasi maiores, atque voluptatibus illum commodi sed sit deserunt labore laboriosam suscipit alias, id sequi, ratione animi quo ducimus libero necessitatibus delectus tempore.
                    Impedit, ad. Architecto cupiditate libero aliquid iste. Laboriosam aut quasi temporibus? Placeat, dicta iste neque, quo, reprehenderit ipsa labore est aliquid suscipit sapiente odit voluptates magnam. Eius repellendus quisquam debitis?
                    Sapiente, temporibus fugiat maxime expedita accusantium corporis nostrum, corrupti distinctio voluptates sunt culpa architecto voluptatum harum. Reiciendis ipsum dicta nesciunt ullam repellendus commodi recusandae accusantium quidem, repellat aliquam, et odit!
                    Rerum, illo excepturi fugiat autem suscipit voluptas porro ipsam doloremque reiciendis quis eligendi, culpa et eum aliquid accusantium sed amet assumenda architecto fugit voluptate impedit alias. Ad sapiente esse illo.
                    Ad assumenda nihil ducimus labore repellat, unde nesciunt. Id ipsam in dolore facilis quisquam non corporis aperiam amet repudiandae nihil possimus soluta deserunt necessitatibus exercitationem iure corrupti, doloribus minus! Voluptatem.
                    Vero fugit adipisci culpa beatae obcaecati, ratione corrupti laborum non iusto repudiandae illo unde quasi repellat delectus ad sint laudantium voluptates vel accusantium expedita nobis explicabo illum quos! Omnis, beatae!
                    Qui eius veniam repudiandae doloribus nesciunt magnam, assumenda cupiditate commodi temporibus repellendus animi nostrum itaque quasi maiores pariatur facere provident nisi! Laboriosam explicabo asperiores laudantium possimus deserunt, ab deleniti? Vero.
                    Cupiditate eaque nisi debitis reprehenderit dolores eligendi earum id! Expedita nemo aliquam cupiditate voluptas facilis, doloremque quis eum assumenda id magnam? Aspernatur excepturi impedit assumenda eaque. Excepturi, voluptates ut? Praesentium.
                    Odit et deserunt itaque delectus enim aperiam quibusdam facere, consequuntur deleniti maxime? Eos quisquam assumenda, architecto perspiciatis dicta illo suscipit ex deleniti tempora vel, at magnam unde. Eius, totam vero?
                    Tenetur, error soluta necessitatibus dolor aperiam laborum molestias officiis earum recusandae magni quaerat commodi quis quidem, quos ab, vel repellat voluptates nesciunt distinctio modi debitis. Error obcaecati excepturi dolore sunt?
                    Modi, illum? Ipsum exercitationem ea non laudantium deserunt numquam at inventore ratione, tempora deleniti cum? Provident, id cumque architecto ipsam magnam repellat reprehenderit exercitationem molestiae nisi accusantium necessitatibus beatae illo.
                    Excepturi animi natus sint ipsum corporis mollitia ducimus non exercitationem magnam autem consequuntur illum, voluptatibus iure nihil minus consectetur ab! Officiis at autem odit officia beatae tenetur itaque nihil nesciunt.
                    Quam, fugit dolorum odio eos aut provident ratione et placeat voluptatem illo aliquid ipsa totam autem tempora? Aliquid assumenda dignissimos commodi eligendi laboriosam cumque excepturi fugiat, praesentium asperiores libero aliquam.
                    Facere voluptas assumenda ad doloribus fuga, sequi, explicabo illum impedit magnam cum cumque ducimus unde, doloremque nulla ex alias! Consequuntur error architecto esse nostrum minus sint qui sit beatae quo?
                </div>
            </ScrollArea>
              </div>
            }/>
          </div>
        </TabsContent>
      </Tabs>
        </div>
      </div>
    )
}

