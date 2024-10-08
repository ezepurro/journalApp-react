import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from "../layout/AuthLayout";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignin } from "../../store/auth/thunks";
import { useMemo } from "react";

const LoginPage = () => {

  const {status} = useSelector( state => state.auth )

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: 'ezequiel.purro@google.com',
    password: '123456'
  })

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication());
  }

  const onGoogleSignin = () => {
    console.log('Google signin')
    dispatch(startGoogleSignin())
  }

  return (
    <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container> 

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Email"
                type="email"
                placeholder="Email"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth onClick={onGoogleSignin} disabled={isAuthenticating}>
                  <Google />
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link
                color="inherit"
                to="/auth/register"
                component={ RouterLink }
              >
                Create an account
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

  )
}

export default LoginPage
