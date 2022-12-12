import styles from "./buttonBorder.module.css";

function ButtonBorder({ text, ...buttonProps }) {
  return (
    <button className={styles.btn} {...buttonProps}>
      {text}
    </button>
  );
}

export default ButtonBorder;
