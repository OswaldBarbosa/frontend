import React from "react";
import Modal from "react-modal";
import "./ConfirmModal.css";
import { ConfirmModalProps } from "../types/confirmModal";

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
  title = "Confirmar a ação",
  message = "Tem certeza de que deseja continuar?",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation Modal"
      className="custom-modal-confirm"
      overlayClassName="custom-overlay"
    >
      <h2>{title}</h2>
      <p>{message}</p>
      <div>
        <button className="button-yes" onClick={onConfirm}>Sim</button>
        <button className="button-no" onClick={onRequestClose}>Não</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;