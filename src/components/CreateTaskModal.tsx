import React, { useState } from "react";
import Modal from "react-modal";
import "./CreateTaskModal.css";
import { CreateTaskModalProps } from "../types/createTaskModal";

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  isOpen,
  onRequestClose,
  onCreate
}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCreate = () => {
    if (taskTitle.trim() && taskDescription.trim()) {
      onCreate({ title: taskTitle, description: taskDescription });
      setTaskTitle("");
      setTaskDescription("");
      setErrorMessage(null);
      onRequestClose();
    } else {
      setErrorMessage("Por favor, preencha ambos os campos corretamente.");
    }
  };

  const handleCancel = () => {
    setTaskTitle("");
    setTaskDescription("");
    setErrorMessage(null);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCancel}
      contentLabel="Criar Tarefa"
      className="custom-modal-create"
      overlayClassName="custom-overlay"
    >
      <h2>Criar Tarefa</h2>
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          placeholder="Título"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Descrição</label>
        <textarea
          placeholder="Descrição"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      {errorMessage && <div className="error-message-create">{errorMessage}</div>}
      <div className="container-buttons">
        <button className="button-create" onClick={handleCreate}>Criar</button>
        <button className="button-cancel" onClick={handleCancel}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default CreateTaskModal;