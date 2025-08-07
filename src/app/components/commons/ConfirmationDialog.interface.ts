export interface ConfirmationDialogProps {
    close: () => void
    message: string
    onConfirm: () => void
    onCancel?: () => void
}