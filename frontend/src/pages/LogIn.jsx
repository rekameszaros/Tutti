import Navigation from "../components/navigation/Navigation";
import LogInForm from "../components/log-in/LogIn-form";
import styles from "../pages/css-modules/logIn.module.css";
import notes from "../assets/pale-30.svg";
import Button from "../components/shared components/button/button";
function LogIn() {
  function goToSignUp() {
    window.location.replace("/signup");
  }

  return (
    <div className="LogIn" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <div className={styles.justFlex}>
          <div className={styles.flexContainer}>
            <h1>Welcome Back!</h1>
            <img src={notes} alt="" />
          </div>
          <div className={styles.goToSignUp}>
            <p>Are you not a member yet?</p>
            <Button onClick={goToSignUp} text="Sign up" />
          </div>
        </div>

        <LogInForm />
      </div>
    </div>
  );
}

export default LogIn;
