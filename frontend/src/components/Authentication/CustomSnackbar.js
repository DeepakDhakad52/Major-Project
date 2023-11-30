import { Snackbar } from '@mui/material'
import React from 'react'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar() {
    const [open, setOpen] = React.useState(true);

    const handleSnackbarClose = () => {
        setTimeout(() => setOpen(false), 5000)
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            onClose={handleSnackbarClose}
        >
            <Alert severity="success">
                Login Successfull!
            </Alert>
        </Snackbar>
    )
}

