import Navigation from "../components/navigation/navigation";
import TheMain from "../components/home/TheMain";

export default function Home() {
    return (

        <div className="Home" id="outer-container">
            <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
            <TheMain />
        </div>
    );
}


