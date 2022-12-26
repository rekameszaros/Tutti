import styles from "../css-modules/form.module.css";
import MyModal from "../shared components/Modal";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";

import Style from "../css-modules/forumInputs.module.css";
import FormInput from "../signup/ForumInput";

function EnsambleCreate() {
  const url = "http://localhost:3005/";
  const [showModal, setShowModal] = useState(false);
  const userFromStorage = localStorage.getItem("user");
  const idFromStorage = localStorage.getItem("id");
  // console.log(userStorage);
  const closeModal = () => {
    setShowModal(false);
  };

  const [values, setValues] = useState({
    name: "",
    shortDescription: "",
  });

  const inputs = [
    { id: 1, name: "name", type: "text", placeholder: "Name of your ensamble", errorMessage: "Name should be 3-30 characters and should not include any special charatcters", label: "Name", pattern: "^[A-Za-z0-9 ]{3,30}$", required: true },
    {
      id: 2,
      name: "shortDescription",
      type: "text",
      placeholder: "Short description of your ensamble",
      errorMessage: "Description should be between 3-120 characters and should not include any special charatcters",
      label: "Short Description",
      pattern: "^[A-Za-z0-9 ]{3,120}$",
      required: true,
    },
  ];
  const onSwitch = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const options = [
    { name: "classical", id: 1 },
    { name: "blues", id: 2 },
    { name: "jazz", id: 3 },
    { name: "soul", id: 4 },
    { name: "reggae", id: 5 },
    { name: "country", id: 6 },
    { name: "traditional", id: 7 },
    { name: "pop", id: 8 },
    { name: "hip hop", id: 9 },
  ];

  const optionsLocation = [
    { value: "frederiksberg", label: "Frederiksberg" },
    { value: "nørrebro", label: "Nørrebro" },
    { value: "østerbro", label: "Østerbro" },
    { value: "nordhavn", label: "Nordhavn" },
    { value: "amager", label: "Amager" },
    { value: "valby", label: "Valby" },
    { value: "vanløse", label: "Vanløse" },
    { value: "brønshøj", label: "brønshøj" },
    { value: "husum", label: "Husum" },
    { value: "lyngby", label: "Lyngby" },
  ];
  const [items, setItems] = useState([]);
  const handleSelect = (selectedList) => {
    setItems(selectedList);
  };
  const handleRemove = (selectedList) => {
    setItems(selectedList);
  };

  async function handleSubmit(event) {
    console.log(event);
    console.log(JSON.parse(userFromStorage)._id);
    event.preventDefault();
    const ensamble = {
      createdBy: JSON.parse(userFromStorage),
      name: event.target[0].value,
      shortDescription: event.target[1].value,
      location: event.currentTarget.elements.location.value,
      musicGenre: items,
    };
    console.log(ensamble);

    const response = await postEnsamble(ensamble);
    console.log(response);
  }
  async function postEnsamble(ensamble) {
    const response = await fetch(url + "ensamble", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(ensamble),
    });
    const res = await response.json();
    // console.log(res);
    if (res.statusCode === 201) {
      postEnsmableToArray(ensamble);
      setShowModal(true);
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
    }
    return res;
  }

  async function postEnsmableToArray(ensamble) {
    const response = await fetch(url + "user/" + idFromStorage + "/ensambles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(ensamble),
    });
    const res = await response.json();
    // console.log(res);
    if (res.statusCode === 201) {
      setShowModal(true);
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
    }
    return res;
  }

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit} style={{ paddingTop: "2rem", width: "60%" }}>
        <h1 style={{ color: "#353a5d" }}>Create an ensamble</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onSwitch} />
        ))}
        <label>
          Location
          <Select options={optionsLocation} name="location" id="location" placeholder="Pick the location of the ensamble" />
        </label>
        <label>
          Genre
          <Multiselect options={options} selectedValues={items} onSelect={handleSelect} onRemove={handleRemove} displayValue="name" style={{ chips: { backgroundColor: "#353a5d" }, searchBox: { height: "auto" } }} placeholder="Select genres" />
        </label>
        <button type="submit" name="submit" id="submit" value="Submit" style={{ backgroundColor: "#353a5d" }}>
          Create
        </button>
      </form>
      <MyModal showModal={showModal} text="Ensamble was created succesfully" closeModal={closeModal} />
    </div>
  );
}

export default EnsambleCreate;
