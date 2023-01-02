import ProfileForm from "../components/profile/Profile-form";
import Navigation from "../components/navigation/Navigation";
import styles from "../pages/css-modules/profile.module.css";
import Button from "../components/shared components/button/button";
import ButtonBorder from "../components/shared components/button/ButtonBorder";
import Footer from "../components/shared components/footer/Footer";
// import Button from "../components/shared components/button/button";
import ProfileModal from "../components/profile/ProfileModal";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faGuitar, faLocation } from "@fortawesome/free-solid-svg-icons";
import ProfileEnsambleCard from "../components/profile/ProfileEnsambleCard";
import Note from "../assets/instrument-icon.svg";

function Profile() {
  const url = "http://localhost:3005/";
  const [data, setData] = useState({});
  const [ensambles, setEnsmables] = useState(null);
  const [instruments, setInstruments] = useState(null);
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
    getSpecificUser(id);
    function getSpecificUser(userId) {
      fetch(url + "user/" + userId, {
        method: "GET",
        // does not work
        // Authorization: `Bearer ${tokenFromStorage}`,
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setEnsmables(result.Ensambles);
          setInstruments(result.instrument);
          // setEnsmables(result.Ensambles);
          // console.log(ensambles);
        })

        .catch((err) => console.log("error"));
    }
  }, []);

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
  const goCreate = () => {
    window.location.replace("/create");
  };
  return (
    <>
      <div className={styles.outerContainer} id="outer-container">
        <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
        <div id="page-wrap" className={styles.pageWrap}>
          <div className={styles.userCard}>
            <div className={styles.cardLine}>
              <FontAwesomeIcon icon={faUserAlt} style={{ color: "gray" }} />
              <h1>{data.name}</h1>
            </div>
            <p>Profile created November 2022</p>
            {/* {JSON.stringify(data[0])} */}
            <div className={styles.cardLine}>
              <img src={Note} alt="Musical notes" />
              {instruments !== null && instruments.length > 0 ? (
                instruments.map((instrument, index) => {
                  return (
                    <>
                      <p style={{ color: "white", backgroundColor: "gray", borderRadius: "10px", padding: "0.2rem 0.5rem 0.2rem 0.5rem" }} key={"instrument" + index}>
                        {" "}
                        {instrument.name}
                      </p>
                    </>
                  );
                })
              ) : (
                <div>
                  <p>No instruments selected</p>
                </div>
              )}
            </div>

            {/* after you create Short Description put if statment to show it */}
            <Button text="Edit profile" onClick={showProfileModal}></Button>
          </div>

          <div className={styles.btnContainer}>
            <Button onClick={deleteAcc} text={"Delete account"} />
            <ButtonBorder onClick={logOut} text={"Log out"} />
          </div>

          <ProfileModal showModal={showModal} closeModal={closeModal} />
        </div>
        <div>
          <h2 style={{ textAlign: "left", paddingTop: "3rem", color: "#353a5d", paddingLeft: "5rem" }}>All the ensambles you have created</h2>
          <div className={styles.ensamblesContainer}>
            {ensambles !== null && ensambles.length > 0 ? (
              ensambles.map((ensamble, index) => {
                return (
                  <>
                    <ProfileEnsambleCard key={"ensamble-" + index} ensamble={ensamble} />
                  </>
                );
              })
            ) : (
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-around" }}>
                <h3 style={{ paddingRight: "2rem" }}> You have not created any ensambles yet.</h3>
                <Button onClick={goCreate} text={"Create ensamble"} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
