import ProfileForm from "../components/profile/Profile-form";
import Navigation from "../components/navigation/Navigation";
import styles from "../pages/css-modules/profile.module.css";
import Footer from "../components/shared components/footer/Footer";import Button from "../components/shared components/button/button";
import ProfileModal from "../components/profile/ProfileModal";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faGuitar } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const url = "http://localhost:3005/";
  const [data, setData] = useState([]);
  const [userId, setID] = useState("");
  const tokenFromStorage = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  localStorage.setItem("user", JSON.stringify(data));

  function showProfileModal() {
    setShowModal(true);
  }
  useEffect(() => {
    const location = window.location.toString();
    const splitQuestionmark = location.split("?");
    const routeParams = splitQuestionmark[1];
    const splitIdParam = routeParams.split("=");
    const id = splitIdParam[1];
    setID(id);
  }, []);
  useEffect(() => {
    console.log(userId);
    getSpecificUser(userId);
  }, [userId]);
  const getSpecificUser = (id) => {
    fetch(url + "user/" + id, {
      method: "GET",
      // does not work
      // Authorization: `Bearer ${tokenFromStorage}`,
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log("error"));
  };
  const deleteAcc = () => {
    fetch(url + "user/" + userId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
    })
      .then((res) => {
        res.json();
        if (res) {
          window.location.replace("/signup");
        }
      })
      .catch((err) => console.log("error"));
  };
  const logOut = () => {
    console.log("I am logging out");
    localStorage.clear();
    window.location.replace("/login");
  };
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className={styles.pageWrap}>
        <div className={styles.userCard}>
          <div className={styles.cardLine}>
            <FontAwesomeIcon icon={faUserAlt} />
            <h1>{data.name}</h1>
          </div>
          <p>Profile created November 2022</p>
          {/* {JSON.stringify(data[0])} */}
          <div className={styles.cardLine}>
            <FontAwesomeIcon icon={faGuitar} />
            <h2>{data.instrument}</h2>
          </div>
          {/* after you create Short Description put if statment to show it */}
          <Button text="Edit profile" onClick={showProfileModal}></Button>
        </div>
        <div className={styles.btnContainer}>
          <Button onClick={deleteAcc} text={"Delete account"} />
          <Button onClick={logOut} text={"Log out"} />
        </div>

        <ProfileModal showModal={showModal} closeModal={closeModal} />

        {/* <ProfileForm /> */}
      </div>
    </div>
  );
}

export default Profile;
