import styles from "../css-modules/form.module.css";
import MyModal from "../shared components/Modal";
import { useState } from "react";
import Style from "../css-modules/forumInputs.module.css";

function EnsambleCreate() {
  const url = "http://localhost:3005/";
  const [showModal, setShowModal] = useState(false);
  const userFromStorage = localStorage.getItem("user");
  const idFromStorage = localStorage.getItem("id");
  // console.log(userStorage);
  const closeModal = () => {
    setShowModal(false);
  };

  async function handleSubmit(event) {
    console.log(event);
    console.log(JSON.parse(userFromStorage)._id);
    event.preventDefault();
    const ensamble = {
      createdBy: JSON.parse(userFromStorage),
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
  // async function getLoggedUser(user) {
  //   const response = await fetch(url + "ensamble", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     mode: "cors",
  //     body: userFromStorage,
  //   });
  //   const res = await response.json();
  //   // console.log(res);
  //   // if (res.statusCode === 201) {
  //   //   setShowModal(true);
  //   //   setTimeout(() => {
  //   //     window.location.replace("/");
  //   //   }, 1000000);
  //   // }
  //   console.log(res);
  //   return res;
  // }
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
    <div className={Style.formInput}>
      <form onSubmit={handleSubmit} className="{styles.app} {Style.formInput} ">
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="shortDescription">
          Short description:
          <input type="text " name="shortDescription" id="shortDescription" />
        </label>
        <label htmlFor="location">
          Location:
          <input type="text" name="location" id="location" />
        </label>
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
