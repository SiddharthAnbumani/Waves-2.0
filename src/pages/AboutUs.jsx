
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";
import PageBannerPlusText from "../components/PageBannerPlusText";

export default function AboutUs() {
    return (
        <div className="">
            <PageBannerPlusText
            img='gallery_bg.avif'
            text='WHO ARE WE?'/>
            <div>
                <Tabs/>
            </div>
            <Footer/>
        </div>
    );
  }
  