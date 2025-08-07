import {type FC, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import {useTranslation} from "react-i18next";
import type {ConfirmationDialogProps} from "./ConfirmationDialog.interface.ts";

const ConfirmationDialog: FC<ConfirmationDialogProps> = (props) => {
    const {
        close,
        message,
        onConfirm,
        onCancel
    } = props;
    const {t} = useTranslation();
    const [opened, setOpened] = useState(true)

    const pendingClose = () => {
        setOpened(false);
        setTimeout(() => close(), 500)
    }

    return <Dialog
        maxWidth={'xs'}
        fullWidth
        open={opened}
        onClose={pendingClose}
    >
        <DialogContent>
            {message}
        </DialogContent>
        <DialogActions>
            <Button
                variant={'outlined'}
                onClick={
                    () => {
                        onCancel?.()
                        pendingClose()
                    }
                }
                sx={theme => (
                    {
                        color: theme.palette.text.primary,
                        border: `1px solid ${theme.palette.text.primary}`,
                    }
                )}
            >
                {t('common.noBTN')}
            </Button>
            <Button
                variant={'contained'}
                onClick={
                    () => {
                        onConfirm()
                        pendingClose()
                    }}
            >
                {t('common.yesBTN')}
            </Button>
        </DialogActions>
    </Dialog>
}

export default ConfirmationDialog;