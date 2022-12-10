import styles from "./Card.module.css";
import { useEffect, useState } from "react";

const Card = ({ ensemble }) => {
  const url = "http://localhost:3005/";
  const token = localStorage.getItem("token");
  const [myId, setId] = useState();
  useEffect(() => {
    setId(ensemble._id);
  }, [setId]);

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.instrument}>{ensemble.shortDescription}</p>
      </div>
    </div>

   

       
   
    
  );
};

export default Card;
