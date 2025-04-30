
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";
import PageBannerPlusText from "../components/PageBannerPlusText";

export default function AboutUs() {
    return (
        <div className="">
            <PageBannerPlusText
            img="contact.jpg"
            bg="bg-black/30 backdrop-blur-3xl"
            text='WHO ARE WE?'/>
            <div className="">
                <Tabs/>
            </div>
            <Footer/>
        </div>
    );
  }
  