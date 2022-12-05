import ProfileForm from "../components/profile/Profile-form";
import Navigation from "../components/navigation/Navigation";
import styles from "../pages/css-modules/profile.module.css";
import Footer from "../components/shared components/footer/Footer";
function Profile() {
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <ProfileForm />
      </div>
    </div>
  );
}

export default Profile;
