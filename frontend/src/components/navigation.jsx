import Button from "./button";
import { slide as Menu } from 'react-burger-menu';
import './navigation.css';

export default Navigation => {
  return (
    <Menu>
      <a className="Navigation" href="/">
        Home
      </a>
      <a className="Navigation" href="/signup">
        Signup Page
      </a>
      <a className="Navigation" href="/login">
        Login
      </a>
      <a className="Navigation" href="/ensemble">
        Create Ensemble
      </a>
    </Menu>
  );
};

//function Navigation() {
 // return (
 //   <>
 //     <p>navigatnion</p>
 //     <Button />
 //     <Button />
 //     <Button />
 //   </>
 // );
//}

//export default Navigation;
