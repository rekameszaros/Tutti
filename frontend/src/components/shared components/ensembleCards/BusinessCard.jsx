import styles from "./Card.module.css";
import Button from "../button/button";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from "./CardBack";
import ButtonBorder from "../button/ButtonBorder";
import EnsambleCreate from "../../ensemble/createEnsemble-form";
import notes from "../../../assets/icons8-jazz.svg";
import MyModal from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faUser } from "@fortawesome/free-solid-svg-icons";

const BusinessCard = ({ ensemble }) => {
  const url = "http://localhost:3005/";
  const token = localStorage.getItem("token");
  const [myId, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const [data, setData] = useState("");
  // const [createdBy, setCreatedBy] = null;
  const closeModal = () => {
    setShowModal(false);
  };
  // const [userArray, setUserArray] = useState([ensemble.User]);
  // lala
  useEffect(() => {
    setId(ensemble._id);
  }, [setId]);

  const [isFlipped, setFlipped] = useState(false);

  const showBack = () => {
    setFlipped(true);
  };

  const showFront = () => {
    setFlipped(false);
  };

  console.log(ensemble.User);
  const postUser = () => {
    const userFromStorage = localStorage.getItem("user");
    fetch(url + "ensamble/" + myId + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //  Authorization: `Bearer ${tokenFromStorage}`,
      },
      body: userFromStorage,
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setCreatedBy(result.createdBy.name);
        if (result.statusCOde === 201) {
          setShowModal(true);
          setModalStatus("You have sucessfully joined the ensamble");
          setTimeout(() => {
            window.location.replace("/");
          }, 3000);
        } else {
          setModalStatus("Joining the ensamble failed");
          console.log("could not post");
          setTimeout(() => {
            window.location.replace("/");
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.card}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "300px" }}>
          <div>
            <div>
              <img src={notes} alt="Musical notes" />
              <p className={styles.headline}>{ensemble.name}</p>
            </div>
            <div style={{ display: "flex", columnGap: "0.2rem", paddingLeft: "0.5rem", paddingTop: "0.5rem", alignItems: "baseline" }}>
              <FontAwesomeIcon icon={faUser} style={{ color: "#bf1e2e" }} />
              <p className={styles.name}> {ensemble.createdBy.name}</p>
            </div>
            <div style={{ display: "flex", columnGap: "0.2rem", paddingLeft: "0.5rem", paddingTop: "0.5rem" }}>
              <FontAwesomeIcon icon={faLocationPin} style={{ color: "#bf1e2e" }} />
              <p className={styles.name}>{ensemble.location.charAt(0).toUpperCase() + ensemble.location.slice(1)}</p>
            </div>
          </div>
          <div>
            <h3 className={styles.headline1}>Ensemble members:</h3>
            {ensemble.User !== null && ensemble.User.length > 0 ? (
              <div className={styles.nameList}>
                {ensemble.User.map((member, index) => {
                  return (
                    <p key={"member" + index} className={styles.instrument} style={{ marginLeft: "0.5rem", marginBottom: "0.5rem", backgroundColor: "#00000014", padding: "0.2rem 0.5rem 0.2rem 0.5rem", color: "#2c2f4b", borderRadius: "10px" }}>
                      {member.name}
                    </p>
                  );
                })}
              </div>
            ) : (
              <p style={{ color: "#2c2f4b", marginLeft: "0.5rem" }}>There are no members yet.</p>
            )}

            {token && (
              <div style={{ display: "flex", columnGap: "1em" }}>
                <Button onClick={postUser} text="Join Ensemble" />
                <ButtonBorder onClick={showBack} text="Show Details"></ButtonBorder>
              </div>
            )}
          </div>
        </div>

        <div>
          <div>
            <div className={styles.backContainer}>
              <div>
                <h3 style={{ color: "#2c2f4b" }}>Description:</h3>
                <p className={styles.instrument}>{ensemble.shortDescription}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <h3 style={{ color: "#2c2f4b" }}>Music genre:</h3>
                {ensemble.musicGenre.map((genre, index) => {
                  return (
                    <p key={"genre" + index} className={styles.instrument} style={{ marginLeft: "0.5rem" }}>
                      {genre.name + ","}
                    </p>
                  );
                })}
              </div>
              <div>
                <h3 style={{ color: "#2c2f4b" }}>Contact:</h3>
                <p className={styles.instrument}>{ensemble.createdBy.email}</p>
              </div>
              <Button onClick={showFront} text="Hide Details"></Button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
      <MyModal showModal={showModal} text={modalStatus} closeModal={closeModal} />
    </div>
  );
};

export default BusinessCard;
