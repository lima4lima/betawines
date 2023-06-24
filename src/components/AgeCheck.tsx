// AgeCheck.tsx
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const AgeCheck: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (!ageVerified) {
      setOpen(true);
    }
  }, []);

  const handleYesClick = () => {
    localStorage.setItem('ageVerified', 'true');
    setOpen(false);
  };

  const handleNoClick = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Age Verification"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you have legal age for alcohol beverages consumption?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNoClick} color="primary">
          No
        </Button>
        <Button onClick={handleYesClick} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AgeCheck;
