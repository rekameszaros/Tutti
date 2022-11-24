import styles from "./TheMain.module.css";
import BusinessCard from "../shared components/ensembleCards/BusinessCard.jsx";
import { useEffect } from "react";
import { transformToArray } from "../utils/toArray";
import { useState } from "react";

const url = "http://localhost:3005/ensamble";

const names = [];
export default function TheMain() {
  const [contacts, setContacts] = useState([]);
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
        // TODO: Hide the spinner.
      });
  }, []);

  useEffect(() => {
    console.log(contacts);
    contacts.map((contact, index) => {
      contact.User.map((myUser) => {
        const name = myUser.name;
        names.push(name);
      });
      console.log(names);
    });
  }, [contacts]);

  // Using async/await

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const body = await response.json();
    }
    getData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.split}>
        <div className={styles.cardLayout}>
          {contacts.map((contact, index) => {
            return <BusinessCard key={"business-cards-" + index} headline={contact.name} location={contact.location} desc={contact.shortDescription} members={names} id={contact._id} />;
          })}
        </div>
      </div>
      <div className={styles.split}></div>
    </main>
  );
}