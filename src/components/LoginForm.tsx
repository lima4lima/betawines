import React, { useState } from "react";
import { Button, TextField, Grid, Link, Typography } from "@material-ui/core";
import { client } from "../trpc";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await client.mutation('user.login', { email, password });
      // TODO: handle user session
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h5" gutterBottom>
        Log In
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
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Register Now"}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
