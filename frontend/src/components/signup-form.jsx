import styles from "./signup-form.module.css";
function SignUpForm() {
  const url = "http://localhost:3005/";
  async function handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: event.currentTarget.elements.name.value,
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
      confirmPassword: event.currentTarget.elements.checkPassword.value,
      instrument: event.currentTarget.elements.instrument.value,
    };
    console.log(user);
    // use this for validation
    const response = await postUser(user);
    console.log(response);
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
    // console.log(res);
    return res;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" />
      </label>
      <label htmlFor="checkPassword">
        Confirm Password:
        <input type="password" name="checkPassword" id="checkPassword" />
      </label>
      <label htmlFor="instrument">
        Instrument:
        <input type="text" name="instrument" id="instrument" />
      </label>
      <input type="submit" name="submit" id="submit" value="Submit" />
    </form>
  );
}

export default SignUpForm;
