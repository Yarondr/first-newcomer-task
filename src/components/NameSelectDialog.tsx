import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";

export interface NameSelectDialogProps {
    onSave: (name: string) => void;
}

export default function NameSelectDialog({ onSave }: NameSelectDialogProps) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [tempName, setTempName] = React.useState('');

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleSave = (name: string) => {
        setName(tempName);
        onSave(tempName);
        handleClose();
    }

    return (
        <Box>
            <Button
                color="inherit" size="small" variant="outlined" onClick={handleOpen}
                sx={{display: 'inline-block', width: 300, overflow: 'hidden', whiteSpace: 'nowrap'}}
            >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'none' }}>
                    Your Name: {name}
                </Typography>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter your name:</DialogTitle>
                <DialogContent>
                    <TextField
                        color='secondary'
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={name}
                        onChange={(event) => {
                            setTempName(event.target.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='secondary' onClick={handleClose}>Cancel</Button>
                    <Button color='secondary' type='submit' onClick={() => handleSave(name)}>Save</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}