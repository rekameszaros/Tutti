import Navigation from "../components/navigation/navigation";
import TheMain from "../components/home/TheMain";

function Home() {
    return (

        <div className="Home" id="outer-container">
            <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
            <p>This is Home</p>
            <TheMain />
        </div>
    );
}

export default Home;
