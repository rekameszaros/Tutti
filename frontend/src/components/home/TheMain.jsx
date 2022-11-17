import styles from "./TheMain.module.css";
import BusinessCard from "../shared components/ensembleCards/BusinessCard.jsx";
import { useEffect } from "react";
import { transformToArray } from "../utils/toArray";
import { useState } from "react";

const url =
  "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/business-contacts.json";

export default function TheMain() {
  const [contacts, setContacts] = useState([]);



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
        // TODO: Hide the spinner.
      });
  }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  // Using async/await
  /*
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const body = await response.json();
      console.log("async/await", body);
    }
    getData();
  }, []);
  */

  return (
    <main className={styles.main}>
      <div className={styles.split}>
        <div className={styles.cardLayout}>
          {contacts.map((contact, index) => {
            return (
              <BusinessCard
                key={"business-cards-" + index}
                name={contact.name}
                job={contact.job}
                website={contact.website}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.split}>
      </div>
    </main>
  );
}
