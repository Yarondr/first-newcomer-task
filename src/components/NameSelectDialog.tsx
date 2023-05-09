import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";

export interface NameSelectDialogProps {
    name: string;
    onSave: (name: string) => void;
}

export default function NameSelectDialog({ name, onSave }: NameSelectDialogProps) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleSave = (name: string) => {
        onSave(name);
        handleClose();
    }

    return (
        <div>
            <Button color="inherit" size="small" variant="outlined" onClick={handleOpen}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Your Name: {name}
                </Typography>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter your name:</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={name}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleSave(name)}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}