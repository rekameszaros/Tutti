import { useState } from "react";
import styles from "./form.module.css";
import MyModal from "./Modal";

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

    console.log(user);

    const response = await postUser(logUser);
    console.log(response.token);
    localStorage.setItem("token", response.token);
    if (response.token) {
      setShowModal(true);
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
    }
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

    setUser((user) => ({
      ...user,
      ...res,
    }));
    // console.log(res);

    return res;
  }

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
