import Navigation from "../components/navigation/Navigation";
import LogInForm from "../components/log-in/LogIn-form";
import styles from "../pages/css-modules/signUp.module.css";
import Footer from "../components/shared components/footer/Footer";

function LogIn() {
  return (
    <div className="LogIn" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <LogInForm />
      </div>
    </div>
  );
}

export default LogIn;
