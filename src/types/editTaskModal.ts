import { Task } from "./task";

export interface EditTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onEdit: (updatedTask: Task) => void;
    task: Task;
}