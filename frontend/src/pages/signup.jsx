import SignUpForm from "../components/signup-form";
import Navigation from "../components/navigation";
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
