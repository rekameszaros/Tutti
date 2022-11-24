import styles from "./BusinessCard.module.css";
import Button from "../button/button";

const BusinessCard = ({ headline, location, desc, members }) => {
  return (
    <div className={styles.card}>
      <p className={styles.headline}>{headline}</p>
      <p className={styles.name}>{location}</p>
      <p className={styles.instrument}>{desc}</p>
      <p className={styles.instrument}>{members}</p>
      <Button text="Join ensemble" />
    </div>
  );
};

export default BusinessCard;
