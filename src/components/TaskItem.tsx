import React from "react";
import "./TaskItem.css";
import { TaskItemProps } from "../types/taskItem";

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        Status:{" "}
        {task.status === "pendente"
          ? "Pendente"
          : task.status === "concluido"
          ? "Concluído"
          : task.status}
      </p>
      <button className="button-edit" onClick={() => onEdit(task)}>
        Editar
      </button>
      <button className="button-delete" onClick={() => onDelete(task.id)}>
        Excluir
      </button>
    </div>
  );
};

export default TaskItem;
