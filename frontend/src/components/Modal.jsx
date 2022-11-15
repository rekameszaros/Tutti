import Modal from "react-modal";

export default function MyModal({ showModal, text, closeModal }) {
  Modal.setAppElement();
  return (
    <Modal isOpen={showModal} ariaHideApp={false} onRequestClose={closeModal}>
      <h1>{text}</h1>
    </Modal>
  );
}
