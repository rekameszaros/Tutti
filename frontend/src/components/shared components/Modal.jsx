import Modal from "react-modal";
import styles from "../css-modules/modal.module.css";

export default function MyModal({ showModal, text, closeModal }) {
  Modal.setAppElement();
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "#777777",
          display: "flex",
          justifyContent: "center",
        },
        content: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#353A5D",
          width: "60vw",
          top: "20%",
          left: "15%",
        },
      }}
      portalClassName={styles.modal}
      isOpen={showModal}
      ariaHideApp={false}
      onRequestClose={closeModal}
    >
      <h1>{text}</h1>
    </Modal>
  );
}
