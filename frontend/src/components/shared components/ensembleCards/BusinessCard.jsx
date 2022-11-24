import styles from "./BusinessCard.module.css";
import Button from "../button/button";
import { useState } from "react";

const BusinessCard = ({ headline, location, desc, members, id }) => {
  //     const url = "http://localhost:3005/"
  //     const [myId, setId] = useState()

  //     setId(id);
  //     const postUser = () => {
  //         fetch(url + 'ensamble/' + myId  + "users", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           //  Authorization: `Bearer ${tokenFromStorage}`,
  //           },
  //           body: JSON.stringify(),
  //         })
  //           .then((res) => res.json())
  //           .then((result) => setData(result))
  //           .catch((err) => console.log("error"));
  //       };

  return (
    <div className={styles.card}>
      <p className={styles.headline}>{headline}</p>
      <p className={styles.name}>{location}</p>
      <p className={styles.instrument}>{desc}</p>
      <p className={styles.instrument}>{members}</p>
      <Button text="lala" />
    </div>
  );
};

export default BusinessCard;
