import styles from "./button.module.css";
function Button({ text, ...buttonProps }) {
  return (
    <>
      <button className={styles.btn} {...buttonProps}>
        {text}
      </button>
    </>
  );
}
export default Button;
