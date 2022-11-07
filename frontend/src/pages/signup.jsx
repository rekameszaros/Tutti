import SignUpForm from "../components/Signup-form";
import Navigation from "../components/Navigation";
function SignUp() {
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
