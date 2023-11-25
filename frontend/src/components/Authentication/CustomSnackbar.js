import { Snackbar } from '@mui/material'
import React from 'react'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar() {
    const [open, setOpen] = React.useState(true);

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            onClose={setTimeout(() => setOpen(false), 5000)}
        >
            <Alert severity="success">
                Login Successfull!
            </Alert>
        </Snackbar>
    )
}

