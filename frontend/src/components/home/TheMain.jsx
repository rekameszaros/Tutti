import styles from "./TheMain.module.css";
import BusinessCard from "../shared components/ensembleCards/BusinessCard.jsx";
import { useEffect } from "react";
import { transformToArray } from "../utils/toArray";
import { useState } from "react";

/*
This as standalone code works and fetches data for http://localhost:5000/ensambles


const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = 'mongodb+srv://tuttiuser:tuttipassword@tutti.ipgkfmj.mongodb.net/tutti';
const DATABASE_NAME = "tutti";


var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(3005, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("ensambles");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.post("/ensambles", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.get("/ensambles", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
*/

//This logic works but still missing the data fetch from our database
/*
const url =
  'http://localhost:3005/ensamble';

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
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const body = await response.json();
      console.log("async/await", body);
    }
    getData();
  }, []);
  
  return (
    <main className={styles.main}>
      <div className={styles.split}>
        <div className={styles.cardLayout}>
          {contacts.map((contact, index) => {
            return (
              <BusinessCard
                key={"business-cards-" + index}
                headline={contact.name}
                name={contact.job}
                instrument={contact.website}
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
*/