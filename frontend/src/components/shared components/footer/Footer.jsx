import styles from '../footer/Footer.css'
import insta from "../../../assets/insta.png"
import face from "../../../assets/face.png"
import daos from "../../../assets/daos.jpg"
import notes from "../../../assets/notes.png"
import { useState } from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  


    return <footer className={styles.myContainer}>
<div>
    <div>
      <img src={insta} alt="Instagram icon" />
      <img src={face} alt="Facebook icon" />
    </div>
      <img src={notes} alt="Notes picture" />
      <img src={daos} alt="Daos picture" />
</div>    
    <p>{`Copyright © Tutti ${year}`}</p>  
      </footer>;
  };


  
  export default Footer;
  