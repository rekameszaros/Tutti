import SignUpForm from "../components/signup/Signup-form";
import Navigation from "../components/navigation/Navigation";
import styles from "../pages/css-modules/signUp.module.css";
import Footer from "../components/shared components/footer/Footer";
import notes from "../assets/icons8-jazz.svg";
import longnotes from "../assets/pale-30.svg";
function SignUp() {
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <div className={styles.justFlex}>
          <img src={longnotes} alt="String with musical notes" />
          <h2>Become a member and be able to:</h2>
          <div className={styles.listItem}>
            <img src={notes} alt="Some notes" />
            <p>Find an ensemble that suits you and join it</p>
          </div>
          <div className={styles.listItem}>
            <img src={notes} alt="Some notes" />
            <p>Create a post where other musicians can find and join your ensemble.</p>
          </div>
          <div className={styles.listItem}>
            <img src={notes} alt="Some notes" />
            <p>Browse through ensmebles that are looking for musicians in Copenhagen</p>
          </div>
        </div>
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
