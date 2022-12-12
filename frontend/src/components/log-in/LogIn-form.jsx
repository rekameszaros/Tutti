import { useEffect } from "react";
import { useState } from "react";
import styles from "../css-modules/form.module.css";
import Footer from "../shared components/footer/Footer";
import MyModal from "../shared components/Modal";
import FormInput from "../signup/ForumInput";

export default function LogInForm() {
  const url = "http://localhost:3005/";
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const closeModal = () => {
    setShowModal(false);
  };
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const onSwitch = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    let logUser = {};
    console.log(event);
    logUser = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    const checkInfo = (e) => {
      e.preventDefault();
    };
    checkInfo(event);

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
      setModalStatus("You have been logged in succesfully");
      setTimeout(() => {
        window.location.replace("/profile?id=" + res.id);
      }, 3000);
    } else if (res.statusCode === 401) {
      setModalStatus("Your log in information is not correct. Please try again");
    }
    return res;
  }

  // useEffect(() => {
  //   setUser(postUser);
  // }, []);

  return (
    <>
      <div className={styles.app}>
        <form onSubmit={handleSubmit} id="myForm">
          <h1>Log In</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onSwitch} />
          ))}
          <button type="submit" name="submit" id="submit" value="Log in">Log in</button>
        </form>
      </div>
      <MyModal showModal={showModal} text={modalStatus} closeModal={closeModal} />
    </>
  );
}
