import styles from "./TheMain.module.css";
import stylesCard from "../shared components/ensembleCards/Card.module.css";
import BusinessCard from "../shared components/ensembleCards/BusinessCard.jsx";
import { useEffect } from "react";
import { transformToArray } from "../utils/toArray";
import { useState } from "react";
import notes from "../../assets/icons8-jazz.svg";

import ReactCardFlip from "react-card-flip";
import Button from "../shared components/button/button";
import Card from "../shared components/ensembleCards/CardBack.jsx";

const url = "http://localhost:3005/ensamble";

export default function TheMain() {
  const [contacts, setContacts] = useState([]);
  // const [isFlipped, setFlipped] = useState(false)

  // const [names, setNames] = useState([]);
  // Using Promise chains
  useEffect(() => {
    // TODO: Activating the spinner
    // console.log("useEffect executed");
    fetch(url)
      .then((response) => response.json())
      .then((body) => {
        // console.log("promise chains", body);
        const asArray = transformToArray(body);
        const limitedArray = asArray.slice(0, 5);
        setContacts(limitedArray);
        // console.log(limitedArray);
        // TODO: Hide the spinner.
      });
  }, []);

  // Using async/await

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const body = await response.json();
    }
    getData();
  }, []);

  const redirectSeeMore = () => {
    window.location.replace("/find");
  };

  return (
    <main className={styles.main}>
      <div className={styles.split}>
        <h2 style={{ color: "#2c2f4b" }}>Posted Ensembles</h2>
        <div className={styles.cardLayout}>
          {contacts.map((contact, index) => {
            return (
              <>
                <div>
                  <BusinessCard key={"business-cards-" + index} ensemble={contact} />
                </div>
              </>
            );
          })}
          <div className={stylesCard.seeMoreCard} onClick={redirectSeeMore}>
            <div className={stylesCard.seeMore}>
              <img src={notes} alt="instruments bg" />
              <p style={{ color: "#2c2f4b", fontWeight: "bold", fontSize: "1.3rem" }}>SEE ALL ENSEMBLES</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.split}></div>
    </main>
  );
}
