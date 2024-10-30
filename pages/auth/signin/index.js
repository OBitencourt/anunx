
import TemplateDefault from "../../../src/templates/Default";

import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Typography,
  Input,
  FormHelperText,
  Button,
  CircularProgress,
} from "@mui/material";

import Alert from "@mui/material";

import theme from "../../../src/theme";

import { Formik } from "formik";

import { validationSchema, initialValues } from "./formValues";

import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/router";

// import useToasty from "../../../src/contexts/Toasty";

// import { useRouter } from "next/router";

const SignIn = () => {
  // const router = useRouter();

  // const { setToasty } = useToasty();

  
  const { data: session } = useSession()

  console.log(session)
  const router = useRouter()

  const handleFormSubmit = async (values) => {
    
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashboard'
    })
  
  };

  return (
    <>
      <TemplateDefault>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth="md">
                  <Typography variant="h2" align="center">
                    Entre na sua conta
                  </Typography>


                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.white,
                      marginTop: 3,
                      padding: 3,
                      boxShadow: "0 0 7px gray",
                      borderRadius: 2,
                    }}
                  >

                    {
                      router.query.i === '1' 
                      ? (
                        <Alert severity='error' sx={{margin: 5}}>Usuário ou senha inválidos</Alert>
                      )
                      : null
                    }

                    <FormControl
                      error={errors.email && touched.email}
                      sx={{ mt: 2 }}
                      fullWidth
                    >
                      <InputLabel>E-mail</InputLabel>
                      <Input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl
                      error={errors.password && touched.password}
                      sx={{ mt: 2 }}
                      fullWidth
                    >
                      <InputLabel>Senha</InputLabel>
                      <Input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.password && touched.password
                          ? errors.password
                          : null}
                      </FormHelperText>
                    </FormControl>

                    {isSubmitting ? (
                      <CircularProgress
                        sx={{ display: "block", margin: "15px auto" }}
                      />
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Entrar
                      </Button>
                    )}

                  </Box>
                </Container>
              </form>
            );
          }}
        </Formik>
      </TemplateDefault>
    </>
  );
};

export default SignIn;
