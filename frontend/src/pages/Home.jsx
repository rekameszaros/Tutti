import Navigation from "../components/navigation/navigation";
import TheMain from "../components/home/TheMain";
import Banner from "../components/home/Banner";

export default function Home() {
  return (
    <div className="Home" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <Banner />
      <TheMain />
    </div>
  );
}
