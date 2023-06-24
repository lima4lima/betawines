import React, { useState } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { client } from "../trpc";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const user = await client.mutation('user.register', { email, name, password });
      // TODO: handle user registration
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleRegister}
      >
        Register
      </Button>
    </Grid>
  );
};

export default RegisterForm;
