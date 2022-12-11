import styles from "./Card.module.css";
import { useEffect, useState } from "react";

const Card = ({ ensemble}) => {
  const url = "http://localhost:3005/";
  const token = localStorage.getItem("token");
  const [myId, setId] = useState();
  useEffect(() => {
    setId(ensemble._id);
  }, [setId]);

 

  return (
    <div className={styles.card}>
     <div>
        <div>
          <p className={styles.instrument}>{ensemble.shortDescription}</p>
          <Button onClick={showFront} text="Show Details"></Button> 
        </div>
      </div>
    </div> 

   

       
   
    
  );
};

export default Card;
