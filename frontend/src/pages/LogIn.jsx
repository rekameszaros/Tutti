import Navigation from "../components/Navigation";
import LogInForm from "../components/LogIn-form";
function LogIn() {
  return (
    <div className="SignUp" id="outer-container">
      <Navigation pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <LogInForm />
      </div>
    </div>
  );
}

export default LogIn;
