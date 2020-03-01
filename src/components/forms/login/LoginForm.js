import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import Person from "@material-ui/icons/Person";
import Lock from "@material-ui/icons/Lock";
import "./loginForm.scss";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={username}
        id="username"
        label="Nazwa użytkownika"
        name="username"
        autoComplete="username"
        autoFocus
        onChange={e => setUsername(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          )
        }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        value={password}
        id="username"
        label="Nazwa użytkownika"
        name="username"
        autoComplete="username"
        autoFocus
        onChange={e => setPassword(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          )
        }}
      />
      <Button variant="contained" color="primary" href="/">
        Zaloguj
      </Button>
    </form>
  );
}

export default LoginForm;
