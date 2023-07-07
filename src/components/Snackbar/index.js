import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar as Snack } from '@material-ui/core';

export const Snackbar = ({ severity, msg, openSnackbar, setSnackbarConfig, initialState }) => {
  const resetSnackbar = () => setSnackbarConfig(initialState)
  return (
    <Snack
      anchorOrigin={
        {
          vertical: 'top',
          horizontal: 'right'
        }
      }
      open={openSnackbar}
      onClose={resetSnackbar}
    >
      <MuiAlert
        onClose={resetSnackbar}
        severity={severity}
      >
        {msg}
      </MuiAlert>
    </Snack>
  )
}