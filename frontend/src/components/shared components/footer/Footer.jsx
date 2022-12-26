import styles from "../footer/Footer.css";
import insta from "../../../assets/insta.png";
import face from "../../../assets/face.png";
import daos from "../../../assets/daos.jpg";
import notes from "../../../assets/notes.png";
import mail from "../../../assets/mail.png";
import { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="mailContainer">
        <img src={mail} alt="Envelope" />
        <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
          <h3>Hvad sundes du om Musik Samspil?</h3>
          <a style={{ color: "white", textDecoration: "none" }} href="https://docs.google.com/forms/d/e/1FAIpQLScT4qgtFDzIucCGRxFDea-RlE06e8qipsH3J2l-agzYzu5KxQ/viewform">
            Vi vil gerne høre fra dig, hvis du har ideer tild hvordan vi kan gøre opslevelsen bedre.
          </a>
        </div>
      </div>
      <footer className={styles.myContainer}>
        <div>
          <div>
            <img src={insta} alt="Instagram icon" />
            <img src={face} alt="Facebook icon" />
          </div>
          <img src={notes} alt="Notes picture" />
          <img src={daos} alt="Daos picture" />
        </div>
        <p>{`Copyright © Tutti ${year}`}</p>
      </footer>
    </>
  );
};

export default Footer;
