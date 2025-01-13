import React, { useEffect, useState } from "react";
import { Task } from "../types/task";
import {
  getTasks,
  deleteTask,
  createTask,
  updateTask,
} from "../services/taskService";
import "../styles/TaskList.css";
import TaskItem from "../components/TaskItem";
import ConfirmModal from "../components/ConfirmModal";
import CreateTaskModal from "../components/CreateTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import Modal from "react-modal";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    Modal.setAppElement("#root");

    const fetchTasks = async () => {
      setLoading(true);
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        setMessage("Erro ao carregar tarefas.");
        setTimeout(() => setMessage(null), 5000);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id: number) => {
    setLoading(true);
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      setMessage("Tarefa excluída com sucesso!");
      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      setMessage("Erro ao excluir tarefa.");
      setTimeout(() => setMessage(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id: number) => {
    setTaskToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsModalOpen(false);
    if (taskToDelete !== null) {
      await handleDelete(taskToDelete);
      setIsModalOpen(false);
      setTaskToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setTaskToDelete(null);
    setIsModalOpen(false);
  };

  const handleCreateTask = async (task: {
    title: string;
    description: string;
  }) => {
    setLoading(true);
    try {
      const newTask = await createTask({ ...task, status: "pendente" });
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setIsCreateModalOpen(false);
      setMessage("Tarefa criada com sucesso!");
      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      setMessage("Erro ao criar tarefa.");
      setTimeout(() => setMessage(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };

  const handleUpdateTask = async (updatedTask: Task) => {
    setLoading(true);
    try {
      const task = await updateTask(updatedTask.id, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? task : t))
      );
      setIsEditModalOpen(false);
      setTaskToEdit(null);
      setMessage("Tarefa atualizada com sucesso!");
      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      setMessage("Erro ao atualizar tarefa.");
      setTimeout(() => setMessage(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="task-list">
      {loading ? (
        <div className="loading"></div>
      ) : (
        <>
          <h1>Lista de tarefas</h1>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={() => handleEditTask(task)}
                onDelete={() => confirmDelete(task.id)}
              />
            ))
          ) : (
            <p>Nenhuma tarefa disponível</p>
          )}
          <div className="container-button-create">
            <button onClick={() => setIsCreateModalOpen(true)}>
              Criar nova tarefa
            </button>
          </div>
        </>
      )}

      {message && (
        <div className={`message ${message.includes("Erro") ? "error" : ""}`}>
          {message}
        </div>
      )}

      <ConfirmModal
        isOpen={isModalOpen}
        onRequestClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Apagar tarefa"
        message="Tem certeza que deseja apagar esta tarefa?"
      />

      <CreateTaskModal
        isOpen={isCreateModalOpen}
        onRequestClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateTask}
        title="Criar nova tarefa"
      />

      {taskToEdit && (
        <EditTaskModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          task={taskToEdit}
          onEdit={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default TaskList;
