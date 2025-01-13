export interface ConfirmModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
}
