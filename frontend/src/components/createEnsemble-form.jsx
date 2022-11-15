import styles from "./signup-form.module.css";
function EnsambleCreate() {
  const url = "http://localhost:3005/";
  async function handleSubmit(event) {
    event.preventDefault();
    const ensamble = {
      name: event.currentTarget.elements.name.value,
      shortDescription: event.currentTarget.elements.shortDescription.value,
      location: event.currentTarget.elements.location.value,
      groupMember: event.currentTarget.elements.groupMember.value
      
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
    return res;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
      <label htmlFor="groupMember">
      Group members:
        <input type="number" name="groupMember" id="groupMember" />
      </label>
      <input type="submit" name="submit" id="submit" value="Submit" />
    </form>
  );
}

export default EnsambleCreate;
