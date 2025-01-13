export interface CreateTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onCreate: (task: { title: string; description: string }) => void;
    title?: string;
}