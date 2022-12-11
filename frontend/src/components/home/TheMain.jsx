import styles from "./TheMain.module.css";
import BusinessCard from "../shared components/ensembleCards/BusinessCard.jsx";
import { useEffect } from "react";
import { transformToArray } from "../utils/toArray";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Button from "../shared components/button/button";
import Card from "../shared components/ensembleCards/CardBack.jsx"

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
        setContacts(asArray);
        console.log(asArray);
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

  // const showBack = () => {
  //   setFlipped(true)
  // }

  // const showFront = () => {
  //   setFlipped(false)
  // }


  return (
    <main className={styles.main}>
      <div className={styles.split}>
        <div className={styles.cardLayout}>
          {contacts.map((contact, index) => {

            return (
              <>
              {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
              
              {/*The front side of the card.*/}
              <div>
                <BusinessCard key={"business-cards-" + index} ensemble={contact}  />
                {/* <Button onClick={showBack} text="Show Details"></Button> */}
              </div>
              
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.split}></div>
    </main>
  );
}
