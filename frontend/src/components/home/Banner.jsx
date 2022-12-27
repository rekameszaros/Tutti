import styles from "./Banner.module.css";
import notes from "./../../assets/clip-333.svg";
import Button from "../shared components/button/button";
import ButtonBorder from "../shared components/button/ButtonBorder";
export default function Banner() {
  const redirectFind = () => {
    window.location.replace("/find");
  };
  const redirectCreate = () => {
    window.location.replace("/create");
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1>Stedet hvor amatørmusikere finder hinanden og spiller musik sammen</h1>
        <img src={notes} alt="musical notes" />
      </div>
      <div className={styles.btnContainer}>
        <Button text="Find ensemble" onClick={redirectFind} />
        <ButtonBorder text="Create ensemble" onClick={redirectCreate} />
      </div>
    </div>
  );
}
