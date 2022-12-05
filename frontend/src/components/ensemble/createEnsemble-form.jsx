import styles from "../css-modules/form.module.css";
import MyModal from "../Modal";
import Select from "react-select";
import { useState } from "react";

function EnsambleCreate() {
  const url = "http://localhost:3005/";
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  const options = [
    { value: "region hovedstaden", label: "Region Hovedstaden" },
    { value: "region midtjylland", label: "Region Midtjylland" },
    { value: "region nordjylland", label: "Region Nordjylland" },
    { value: "region sjælland", label: "Region Sjælland" },
    { value: "region syddanmark", label: "Region Syddanmark " },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    const ensamble = {
      name: event.currentTarget.elements.name.value,
      shortDescription: event.currentTarget.elements.shortDescription.value,
      location: event.currentTarget.elements.location.value,
      // groupMember: event.currentTarget.elements.groupMember.value,
    };
    console.log(ensamble);
    // use this for validation
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
      setShowModal(true);
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
    }
    return res;
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formEnsamble}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="shortDescription">
          Short description:
          <input type="text " name="shortDescription" id="shortDescription" />
        </label>
        <Select options={options} name="location" id="location" placeholder="Select location" />
        {/* <label htmlFor="groupMember">
          Group members:
          <input type="number" name="groupMember" id="groupMember" />
        </label> */}
        <input type="submit" name="submit" id="submit" value="Submit" />
      </form>
      <MyModal showModal={showModal} text="Ensamble was created succesfully" closeModal={closeModal} />
    </div>
  );
}

export default EnsambleCreate;
