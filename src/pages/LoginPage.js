import React from "react";
import { Grid } from "@material-ui/core";
import LoginForm from "../components/forms/login/LoginForm";
import Logo from "../components/logo/Logo";

function LoginPage(props) {
  return (
    <Grid container component="main" className="container-small login-page">
      <Grid item>
        <Logo />
        <LoginForm setUSer={props.setUser} />
      </Grid>
    </Grid>
  );
}

export default LoginPage;
