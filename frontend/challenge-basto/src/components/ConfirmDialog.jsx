import React from 'react';
import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

const ConfirmDialog = (props) => {
    const { title, open, setOpen, onConfirm } = props;

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => setOpen(false)}
                    color="gray"
                    sx={{ fontWeight: 'bold', color: 'white' }}
                >
                    No
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setOpen(false);
                        onConfirm();
                    }}
                    sx={{ fontWeight: 'bold', color: 'white' }}
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmDialog;