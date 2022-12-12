import styles from "./Card.module.css";
import Button from "../button/button";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from "./CardBack";
import ButtonBorder from "../button/ButtonBorder";
import EnsambleCreate from "../../ensemble/createEnsemble-form";
import notes from "../../../assets/icons8-jazz.svg";
import MyModal from "../Modal";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const BusinessCard = ({ ensemble }) => {
  const url = "http://localhost:3005/";
  const token = localStorage.getItem("token");
  const [myId, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const [data, setData] = useState("");
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

  //   {contacts.map((contact, index) => {
  //     return <BusinessCard key={"business-cards-" + index} headline={contact.name} location={contact.location} desc={contact.shortDescription} members={names} id= {contact._id}  />;
  //   })}

  return (
    <div className={styles.card}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <div>
            <div>
              <img src={notes} alt="Musical notes" />
              <p className={styles.headline}>{ensemble.name}</p>
            </div>
            <div>
              {/* <FontAwesomeIcon icon={faLocationPin} /> */}
              <p className={styles.name}>{ensemble.location}</p>
            </div>
            <p className={styles.name}>Created by: {ensemble.createdBy.name}</p>
          </div>
          <div>
            <h3 className={styles.headline1}>Ensemble members:</h3>

            <div className={styles.nameList}>
              {ensemble.User.map((member, index) => {
                return (
                  <p key={"member" + index} className={styles.instrument} style={{ marginLeft: "0.5rem" }}>
                    {member.name + ","}
                  </p>
                );
              })}
            </div>
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
            <div>
              <p className={styles.instrument}>{ensemble.shortDescription}</p>
              <Button onClick={showFront} text="Show Details"></Button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
      <MyModal showModal={showModal} text={modalStatus} closeModal={closeModal} />
    </div>
  );
};

export default BusinessCard;
