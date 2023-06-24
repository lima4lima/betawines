// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, Dialog, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#f8f9fa', 
  color: 'black', 
  boxShadow: 'none', 
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

const StyledImage = styled(Image)({
  margin: '0 1px', 
});

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledAppBar position="static" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <StyledImage 
            src="/logo-no-back.png" // replace with your logo's path
            alt="Beta Wines Logo"
            width={60}
            height={60}
          />
          <StyledTypography variant="h6">
            
          </StyledTypography>
        </Box>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Box display="flex" alignItems="center" marginLeft="auto">
          <Button color="inherit" endIcon={<AccountCircleIcon />} onClick={handleClickOpen}>
            Log In
          </Button>
          <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>
            {value === 0 && <LoginForm />}
            {value === 1 && <RegisterForm />}
          </Dialog>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
