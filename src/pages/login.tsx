// pages/login.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Login: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Login Page
      </Typography>
      <Typography>
        This is the login page.
      </Typography>
    </Container>
  );
};

export default Login;
