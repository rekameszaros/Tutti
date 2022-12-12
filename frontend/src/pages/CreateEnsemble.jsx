import EnsambleCreate from "../components/ensemble/createEnsemble-form";
import Navigation from "../components/navigation/Navigation";
import styles from "../pages/css-modules/signUp.module.css";
import Footer from "../components/shared components/footer/Footer";
import notes from "../assets/icons8-jazz.svg";
import longnotes from "../assets/pale-30.svg";

function CreateEnsemble() {
  return (
    <div className="CreateEnsemble" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <div className={styles.justFlex}>
          <img src={longnotes} alt="String with musical notes" />
          <h2>Create a melody :</h2>
          <div className={styles.listItem}>
            <img src={notes} alt="Some notes" />
            <p>Find musicians near me</p>
          </div>
          <div className={styles.listItem}>
            <img src={notes} alt="Some notes" />
            <p>Pick you genre of music</p>
          </div>
          <div className={styles.listItem}>
            <img src={notes} alt="Some notes" />
            <p>Tell us your story</p>
          </div>
        </div>
        <EnsambleCreate />
      </div>
    </div>
  );
}

export default CreateEnsemble;
