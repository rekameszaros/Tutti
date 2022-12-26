import { useState } from "react";

import styles from "../css-modules/form.module.css";
import Multiselect from "multiselect-react-dropdown";
import MyModal from "../shared components/Modal";
import FormInput from "./ForumInput";

import { Navigate, useNavigate } from "react-router-dom";
function SignUpForm() {
  const url = "http://localhost:3005/";
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onSwitch = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const options = [
    { name: "piano", id: 1 },
    { name: "guitar", id: 2 },
    { name: "cello", id: 3 },
    { name: "clarinet", id: 4 },
    { name: "accordion", id: 5 },
    { name: "drum", id: 6 },
    { name: "flute", id: 7 },
    { name: "harp", id: 8 },
    { name: "saxophone", id: 9 },
    { name: "trombone", id: 10 },
    { name: "trumpet", id: 11 },
    { name: "ukulele", id: 12 },
    { name: "xylophone", id: 13 },
  ];

  const [items, setItems] = useState([]);
  const handleSelect = (selectedList) => {
    setItems(selectedList);
  };
  const handleRemove = (selectedList) => {
    setItems(selectedList);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(items);
    const checkInfo = (e) => {
      e.preventDefault();
    };

    checkInfo(event);

    let newUser = {};
    newUser = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      confirmPassword: event.target[3].value,
      instrument: items,
    };
    console.log(newUser);
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
      <div className={styles.app}>
        <form onSubmit={handleSubmit} style={{ paddingTop: "2rem", width: "60%" }}>
          <h1 style={{ color: "#353a5d" }}>Register</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onSwitch} />
          ))}
          <label>
            Instrument
            <Multiselect
              options={options}
              selectedValues={items}
              onSelect={handleSelect}
              onRemove={handleRemove}
              displayValue="name"
              style={{ chips: { backgroundColor: "#353a5d" }, searchBox: { height: "auto" } }}
              placeholder="Select your instruments"
            />
          </label>
          <button type="submit" id="submit" value="Submit" style={{ backgroundColor: "#353a5d" }}>
            Sign up
          </button>
        </form>
      </div>
      <MyModal showModal={showModal} text="User has been signed up succesfully" closeModal={closeModal} />
    </>
  );
}

export default SignUpForm;
