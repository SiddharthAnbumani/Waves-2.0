export default function Vids(){
    return (
        <div className="flex flex-col">
        <div className="flex mt-10 justify-center bg-black/80 backdrop-blur-3xl py-10">
            <div className="">
                <video src="/vids/freestyle.mp4" controls autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                <h1 className="text-2xl font-bold text-white">Freestyle</h1>
            </div>
            <div className="">
                <video src="/vids/backstroke.mp4" controls autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                <h1 className="text-2xl font-bold text-white">Backstroke</h1>
            </div>
        </div>
        <div className="flex mb-10 justify-center  bg-black/80 backdrop-blur-3xl pb-10">
            <div className="">
                <video src="/vids/fly.mp4" controls autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                <h1 className="text-2xl font-bold text-white">Butterfly</h1>
            </div>
            <div className="">
                <video src="/vids/breast.mp4" controls autoPlay muted loop className="h-90 rounded-2xl mx-5"></video>
                <h1 className="text-2xl font-bold text-white">Breast Stroke</h1>
            </div>
        </div>
    </div>
    )
}