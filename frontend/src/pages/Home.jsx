import Navigation from "../components/navigation/navigation";
import ThirdBox from "../components/home/thirdBox";
import Footer from "../components/shared components/footer/footer"
import FirstBox from "../components/home/firstBox"
import SecondBox from "../components/home/secondBox"
import FourthBox from "../components/home/fourthBox"

export default function Home() {
    return (

        <div className="Home" id="outer-container">
            <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
            <FirstBox />
            <SecondBox />
            <ThirdBox />
            <FourthBox />
            <Footer />
        </div>
    );
}


