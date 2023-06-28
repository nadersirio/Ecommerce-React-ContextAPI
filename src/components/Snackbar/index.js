import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar as Snack } from '@material-ui/core';

export const Snackbar = ({ severity, msg, openSnackbar, setOpenSnackbar }) => {
  return (
    <Snack
      anchorOrigin={
        {
          vertical: 'top',
          horizontal: 'right'
        }
      }
      open={openSnackbar}
      onClose={() => setOpenSnackbar(false)}
    >
      <MuiAlert
        onClose={() => setOpenSnackbar(false)}
        severity={severity}
      >
        {msg}
      </MuiAlert>
    </Snack>
  )
}