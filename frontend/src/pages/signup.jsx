import SignUpForm from "../components/Signup-form";
import Navigation from "../components/Navigation";
import styles from "./signUp.module.css";

function SignUp() {
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
