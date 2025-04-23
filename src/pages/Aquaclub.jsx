import VideoPlusText from "../components/VideoPlusText";
import Footer from "../components/Footer";

export default function Aquaclub(){
    return (
        <div className="">
            <VideoPlusText
            img='aquaclub.mp4'
            text={
                <div>
                    <h1 className="text-6xl font-extrabold">SWIMMING AS RECREATION</h1>
                    <h2 className="text-4xl font-light">Join Us for Water Zumba and Fitness Activities</h2>
                </div>
            }/>
            <Footer/>
        </div>
    )
}