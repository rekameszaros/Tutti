import styles from "./Card.module.css";
import Button from "../button/button";
import { useEffect, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Card from "./CardBack";



const BusinessCard = ({ ensemble }) => {
  const url = "http://localhost:3005/";
  const token = localStorage.getItem("token");
  const [myId, setId] = useState();
  useEffect(() => {
    setId(ensemble._id);
  }, [setId]);



  const [isFlipped, setFlipped] = useState(false)
  
  const showBack = () => {
    setFlipped(true)
  }

  const showFront = () => {
    setFlipped(false)
  }






  console.log(ensemble.User);
  const postUser = () => {
    const userFromStorage = localStorage.getItem("user");
    fetch(url + "ensamble/" + myId + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //  Authorization: `Bearer ${tokenFromStorage}`,
      },
      body: userFromStorage,
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log("error"));
  };
  

  //   {contacts.map((contact, index) => {
  //     return <BusinessCard key={"business-cards-" + index} headline={contact.name} location={contact.location} desc={contact.shortDescription} members={names} id= {contact._id}  />;
  //   })}

  return (
    
      
 <div className={styles.card}>
   <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
<div>
<div>
        <p className={styles.headline}>{ensemble.name}</p>
        <p className={styles.name}>{ensemble.location}</p>
      </div>
      <div>
        <h3 className={styles.headline1}>Ensemble members:</h3>
        <div className={styles.nameList}>
          {ensemble.User.map((member, index) => {
            return (
              <p key={"member" + index} className={styles.instrument} style={{ marginLeft: "0.5rem" }}>
                {member.name + ","}
              </p>
            );
          })}
        </div>
        {token && <Button onClick={postUser} text="Join Ensemble" />}
        <Button onClick={showBack} text="Show Details"></Button>
      </div>
</div>
     
   
      <div >
      <div>
        <div>
          <p className={styles.instrument}>{ensemble.shortDescription}</p>
          <Button onClick={showFront} text="Show Details"></Button> 
        </div>
      </div>
    </div>
                
      </ReactCardFlip>
    </div>

   

       
   
    
  );
};

export default BusinessCard;
