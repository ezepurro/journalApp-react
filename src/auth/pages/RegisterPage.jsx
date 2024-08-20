import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from "../layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Sign Up">
        <form>
          <Grid container>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Name"
                type="text"
                placeholder="Name"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Email"
                type="email"
                placeholder="Email"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt:1}}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>Create account</Button>
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
