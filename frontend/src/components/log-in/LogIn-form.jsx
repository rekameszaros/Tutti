import { useEffect } from "react";
import { useState } from "react";
import styles from "../css-modules/form.module.css";
import MyModal from "../Modal";

export default function LogInForm() {
  const url = "http://localhost:3005/";
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    let logUser = {};
    console.log(event);
    logUser = {
      username: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };

    // console.log(user);

    const response = await postUser(logUser);
    console.log(response.token);
    localStorage.setItem("token", response.token);
    localStorage.setItem("id", response.id);
  }
  async function postUser(user) {
    console.log(user);
    const response = await fetch(url + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    });
    const res = await response.json();

    if (res.token) {
      setShowModal(true);
      // setUser(res.id);

      setTimeout(() => {
        window.location.replace("/profile?id=" + res.id);
      }, 3000);
    }
    return res;
  }

  // useEffect(() => {
  //   setUser(postUser);
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form} id="myForm">
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" defaultValue={user.email} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" defaultValue={user.password} />
        </label>
        <input type="submit" name="submit" id="submit" value="Log in" />
      </form>
      <MyModal showModal={showModal} text="User has been logged in succesfully" closeModal={closeModal} />
    </>
  );
}
