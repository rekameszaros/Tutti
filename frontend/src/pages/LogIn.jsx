import Navigation from "../components/Navigation";
import LogInForm from "../components/LogIn-form";
import styles from "./signUp.module.css";

function LogIn() {
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <LogInForm />
      </div>
    </div>
  );
}

export default LogIn;
