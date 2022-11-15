import EnsambleCreate from "../components/createEnsemble-form";
import Navigation from "../components/Navigation";
import styles from "./signUp.module.css";

function CreateEnsemble() {
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <EnsambleCreate />
      </div>
    </div>
  );
}

export default CreateEnsemble;
