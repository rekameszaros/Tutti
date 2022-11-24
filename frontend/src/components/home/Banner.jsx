import styles from "./Banner.module.css";
import notes from "./../../assets/clip-333.svg";
export default function Banner() {
  return (
    <div className={styles.container}>
      <h1>Stedet hvor amatørmusikere finder hinanden og spiller musik sammen</h1>
      <img src={notes} alt="" />
    </div>
  );
}
