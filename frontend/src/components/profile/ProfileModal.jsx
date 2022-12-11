import Modal from "react-modal";
import ProfileForm from "./Profile-form";
export default function ProfileModal({ showModal, closeModal }) {
  Modal.setAppElement();
  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "#777777",
          display: "flex",
          justifyContent: "center",
          width: "100%",
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
      //   portalClassName={styles.modal}
      isOpen={showModal}
      ariaHideApp={false}
      onRequestClose={closeModal}
    >
      {/* <h1>{text}</h1> */}
      <ProfileForm />
    </Modal>
  );
}
