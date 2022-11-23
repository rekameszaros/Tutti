import EnsambleCreate from "../components/ensemble/createEnsemble-form";
import Navigation from "../components/navigation/Navigation";
import styles from "../pages/css-modules/signUp.module.css";

function CreateEnsemble() {
  return (
    <div className="CreateEnsemble" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <EnsambleCreate />
      </div>
    </div>
  );
}

export default CreateEnsemble;
