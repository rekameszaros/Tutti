import styles from "./BusinessCard.module.css";
import Button from "../button/button";
import { useEffect, useState } from "react";
import MyModal from "../Modal";

const BusinessCard = ({ ensemble }) => {
  const url = "http://localhost:3005/";
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  const [myId, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const closeModal = () => {
    setShowModal(false);
  };
  // const [userArray, setUserArray] = useState([ensemble.User]);

  useEffect(() => {
    setId(ensemble._id);
  }, [setId]);

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
        setData(result.user);

        // console.log(result)
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
      <div>
        <p className={styles.headline}>{ensemble.name}</p>
        <p className={styles.name}>Created by: {ensemble.createdBy.name}</p>
        <p className={styles.name}>{ensemble.location}</p>
        <p className={styles.instrument}>{ensemble.desc}</p>
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
        {token && <Button onClick={postUser} text="Join Ensemble" />}
      </div>
      <MyModal showModal={showModal} text={modalStatus} closeModal={closeModal} />
    </div>
  );
};

export default BusinessCard;
