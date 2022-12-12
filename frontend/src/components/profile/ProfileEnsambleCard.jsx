import styles from "../../pages/css-modules/profile.module.css";
import notes from "../../assets/icons8-jazz.svg";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileEnsambleCard({ ensamble }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.borderBottom}>
          <p>{ensamble.name}</p>
          <img src={notes} alt="Musical notes" />
        </div>
        <div className={styles.location}>
          <FontAwesomeIcon icon={faLocationPin} />
          <p>{ensamble.location}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileEnsambleCard;
