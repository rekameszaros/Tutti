function SignUpForm() {
  return (
    <form>
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
        Password:
        <input type="password" name="checkPassword" id="checkPassword" />
      </label>
      <input type="submit" name="submit" id="submit" value="Submit" />
    </form>
  );
}

export default SignUpForm;
