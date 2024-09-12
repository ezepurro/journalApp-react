import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from "../layout/AuthLayout";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'Email not valid'], 
  password: [ (value) => value.length >= 6 , 'Password too short'],
  displayName: [ (value) => value.lenght >= 1 , 'This field is required'],
}

const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return
    dispatch( startCreatingUserWithEmailPassword(formState) );
  }
 

  return (
    <AuthLayout title="Sign Up">
        <form onSubmit={ onSubmit }>
          <Grid container>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Name"
                type="text"
                placeholder="Name"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Email"
                type="email"
                placeholder="Email"
                fullWidth
                name="email"
                value={ email }
                onChange={onInputChange}
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
                name="password"
                value={ password }
                onChange={onInputChange}
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt:1}}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                >Create account</Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr: 1}}>Already have an account?</Typography>
              <Link
                color="inherit"
                to="/auth/login"
                component={ RouterLink }
              >
                Sign In
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

  )
}

export default RegisterPage
