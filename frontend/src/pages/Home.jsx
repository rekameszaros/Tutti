import Navigation from "../components/navigation/navigation";
import TheMain from "../components/home/TheMain";
import Banner from "../components/home/Banner";
import styles from "./css-modules/home.module.css";
import Footer from "../components/shared components/footer/Footer";

export default function Home() {
  return (
    <div className="Home" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <Banner />
      <TheMain />
      <Footer />
    </div>
  );
}
