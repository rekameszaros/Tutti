import { useState } from "react";
import styles from "../css-modules/form.module.css";
// import Select from "react-select";
import { useEffect } from "react";
import Button from "./../shared components/button/button";
import MyModal from "../shared components/Modal";
import FormInput from "../signup/ForumInput";
import Multiselect from "multiselect-react-dropdown";

// import { Navigate, useNavigate } from "react-router-dom";
function ProfileForm() {
  const url = "http://localhost:3005/";
  const [data, setData] = useState([]);
  // const [items, setItems] = useState([]);

  const [values, setValues] = useState({
    username: "",
    email: "",
    // instrument: [],
    // password: "",
    // confirmPassword: "",
  });

  const [userId, setID] = useState("");
  const tokenFromStorage = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  localStorage.setItem("user", JSON.stringify(data));
  useEffect(() => {
    if (data.name && data.email !== null) {
      // // setItems(data.instrument[0].name);
      // setItems({
      //   instrument: data.instrument[0].name,
      // });
      setValues({
        username: data.name,
        email: data.email,
        // instrument: data.instrument[0].name,
        // password: "",
        // confirmPassword: "",
      });
    }
  }, [data]);

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
  // const options = [
  //   { name: "piano", id: 1 },
  //   { name: "guitar", id: 2 },
  //   { name: "cello", id: 3 },
  //   { name: "clarinet", id: 4 },
  //   { name: "accordion", id: 5 },
  //   { name: "drum", id: 6 },
  //   { name: "flute", id: 7 },
  //   { name: "harp", id: 8 },
  //   { name: "saxophone", id: 9 },
  //   { name: "trombone", id: 10 },
  //   { name: "trumpet", id: 11 },
  //   { name: "ukulele", id: 12 },
  //   { name: "xylophone", id: 13 },
  // ];
  // const handleSelect = (selectedList) => {
  //   setItems(selectedList);
  // };
  // const handleRemove = (selectedList) => {
  //   setItems(selectedList);
  // };
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
  ];
  const onSwitch = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
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
      .then((result) => {
        setData(result);
        setShowModal(true);
        setTimeout(() => {
          window.location.replace("/profile?id=" + userId);
        }, 3000);
      })
      .catch((err) => console.log("error"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target[0].value,
      email: event.target[1].value,
      // instrument: items,
      // how not to change the password
      // password: "",
      // instrument: event.currentTarget.elements.instrument.value,
    };
    // console.log(event.currentTarget.elements.instrument);
    setData(newUser);
    // console.log(data);
    saveUser(newUser);
  };

  return (
    <>
      <div className={styles.profileForm}>
        <p>Here you can update your profile information</p>
        <form onSubmit={handleSubmit} className={styles.insideForm}>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onSwitch} style={{ width: "93%" }} />
          ))}
          <input type="submit" name="submit" id="submit" value="Update" style={{ backgroundColor: "#353a5d" }}></input>
        </form>
        <MyModal showModal={showModal} text="User has been updated succesfully" closeModal={closeModal} />
      </div>
    </>
  );
}

export default ProfileForm;
