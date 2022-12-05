import SignUpForm from "../components/signup/Signup-form";
import Navigation from "../components/navigation/Navigation";
import styles from "../pages/css-modules/signUp.module.css";
import Footer from "../components/shared components/footer/Footer";

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
