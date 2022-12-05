import styles from "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Tutti ${year}`}</footer>;
  };


  
  export default Footer;
  