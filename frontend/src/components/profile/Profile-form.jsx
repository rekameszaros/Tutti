import { useState } from "react";
import styles from "../css-modules/form.module.css";
import Select from "react-select";
import { useEffect } from "react";
import Button from "./../shared components/button/button";
// import { Navigate, useNavigate } from "react-router-dom";
function ProfileForm() {
  const url = "http://localhost:3005/";
  const [data, setData] = useState([]);
  const [userId, setID] = useState("");
  const tokenFromStorage = localStorage.getItem("token");
 localStorage.setItem("user", JSON.stringify(data))
 

  useEffect(() => {
    const location = window.location.toString();
    const splitQuestionmark = location.split("?");
    const routeParams = splitQuestionmark[1];
    const splitIdParam = routeParams.split("=");
    const id = splitIdParam[1];
    setID(id);
  }, []);
  useEffect(() => {
    console.log(userId);
    getSpecificUser(userId);
  }, [userId]);
  const options = [
    { value: "piano", label: "Piano" },
    { value: "guitar", label: "Guitar" },
    { value: "cello", label: "Cello" },
    { value: "violin", label: "Violin" },
  ];

  const getSpecificUser = (id) => {
    fetch(url + "user/" + id, {
      method: "GET",
      // does not work
      // Authorization: `Bearer ${tokenFromStorage}`,
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        
      })
      .catch((err) => console.log("error"));
   
  };

  const saveUser = (newUser) => {
    fetch(url + "user/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log("error"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: event.currentTarget.elements.name.value,
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
      instrument: event.currentTarget.elements.instrument.value,
    };
    console.log(event.currentTarget.elements.instrument);
    setData(newUser);
    // console.log(data);
    saveUser(newUser);
  };

  const deleteAcc = () => {
    fetch(url + "user/" + userId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
    })
      .then((res) => {
        res.json();
        if (res) {
          window.location.replace("/signup");
        }
      })
      .catch((err) => console.log("error"));
  };

  const logOut = () => {
    console.log("I am logging out");
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <>
      <div className={styles.form}>
        <h2>Hi {data.name}</h2>
        <p>Here you can update your profile information</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" defaultValue={data.name} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" defaultValue={data.email} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" id="password" defaultValue={data.password} />
          </label>

          <Select options={options} name="instrument" id="instrument" defaultValue={data.instrument} placeholder={data.instrument} />
          <input type="submit" name="submit" id="submit" value="Update" />
        </form>
        <div className={styles.flex}>
          <Button onClick={deleteAcc} text={"Delete account"} />
          <Button onClick={logOut} text={"Log out"} />
        </div>
      </div>
    </>
  );
}

export default ProfileForm;
