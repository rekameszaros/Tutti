import styles from "./BusinessCard.module.css";
import Button from "../button/button";
import { useEffect, useState } from "react";

const BusinessCard = ({ ensemble }) => {
  const url = "http://localhost:3005/";
  const token = localStorage.getItem("token");

  const [myId, setId] = useState();
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
      .then((result) => setData(result))
      .catch((err) => console.log("error"));
  };

  //   {contacts.map((contact, index) => {
  //     return <BusinessCard key={"business-cards-" + index} headline={contact.name} location={contact.location} desc={contact.shortDescription} members={names} id= {contact._id}  />;
  //   })}

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.headline}>{ensemble.name}</p>
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
    </div>
  );
};

export default BusinessCard;
