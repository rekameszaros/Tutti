import styles from "./BusinessCard.module.css";
import Button from "../button/button";
import { useEffect, useState } from "react";

const BusinessCard = ({ headline, location, desc, members, id }) => {
  const url = "http://localhost:3005/";
  const [myId, setId] = useState();
  useEffect(() => {
    setId(id);
  }, [setId]);

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
      <p className={styles.headline}>{headline}</p>
      <p className={styles.name}>{location}</p>
      <p className={styles.instrument}>{desc}</p>
      {members.map((member, index) => {
        return (
          <p key={"member" + index} className={styles.instrument}>
            {member}
          </p>
        );
      })}

      <Button onClick={postUser} text="Join Ensemble" />
    </div>
  );
};

export default BusinessCard;
