import { useState } from "react";
import styles from "../css-modules/form.module.css";
import Select from "react-select";
import MyModal from "../shared components/Modal";

import { Navigate, useNavigate } from "react-router-dom";
function SignUpForm() {
  const url = "http://localhost:3005/";
  const [user, setUser] = useState({});
  // const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  const options = [
    { value: "piano", label: "Piano" },
    { value: "guitar", label: "Guitar" },
    { value: "cello", label: "Cello" },
    { value: "violin", label: "Violin" },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    let newUser = {};
    console.log(event);
    newUser = {
      name: event.currentTarget.elements.name.value,
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
      confirmPassword: event.currentTarget.elements.checkPassword.value,
      instrument: event.currentTarget.elements.instrument.value,
    };
    const response = await postUser(newUser);
  }

  async function postUser(user) {
    const response = await fetch(url + "user", {
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
      ...res.user,
    }));
    if (res.statusCode === 201) {
      setShowModal(true);
      setTimeout(() => {
        window.location.replace("/login");
      }, 3000);
    }
    return res;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" defaultValue={user.name} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" defaultValue={user.email} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" defaultValue={user.password} />
        </label>
        <label htmlFor="checkPassword">
          Confirm Password:
          <input type="password" name="checkPassword" id="checkPassword" defaultValue={user.confirmPassword} />
        </label>
        <Select options={options} name="instrument" id="instrument" defaultValue={user.instrument} placeholder="Select your instrument" />
        <input type="submit" name="submit" id="submit" value="Submit" />
      </form>
      <MyModal showModal={showModal} text="User has been signed up succesfully" closeModal={closeModal} />
    </>
  );
}

export default SignUpForm;
