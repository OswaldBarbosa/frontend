import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./EditTaskModal.css";
import { EditTaskModalProps } from "../types/editTaskModal";

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  isOpen,
  onRequestClose,
  onEdit,
  task,
}) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskStatus, setTaskStatus] = useState(task.status);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setTaskStatus(task.status);
  }, [task]);

  const handleEdit = () => {
    if (taskTitle.trim() && taskDescription.trim()) {
      onEdit({ ...task, title: taskTitle, description: taskDescription, status: taskStatus });
      onRequestClose();
    } else {
      setErrorMessage("Por favor, preencha todos os campos corretamente.");
    }
  };

  const handleCancel = () => {
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setTaskStatus(task.status);
    setErrorMessage(null);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCancel}
      contentLabel="Editar Tarefa"
      className="custom-modal-edit"
      overlayClassName="custom-overlay"
    >
      <h2>Editar Tarefa</h2>
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
      <div>
        <label htmlFor="status">Status</label>
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value as "pendente" | "concluido")}
        >
          <option value="pendente">Pendente</option>
          <option value="concluido">Concluído</option>
        </select>
      </div>
      {errorMessage && <div className="error-message-edit">{errorMessage}</div>}
      <div className="container-buttons">
        <button className="button-save" onClick={handleEdit}>Salvar</button>
        <button className="button-cancel" onClick={handleCancel}>Cancelar</button>
      </div>
    </Modal>
  );
};

export default EditTaskModal;