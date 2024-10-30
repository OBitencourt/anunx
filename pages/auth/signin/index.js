

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

import Alert from "@mui/material/Alert"; // Corrigido aqui
import theme from "../../../src/theme";
import { Formik } from "formik";
import { validationSchema, initialValues } from "./formValues";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const SignIn = ({ APP_URL }) => {
  const { data: session } = useSession();

  console.log(session)
  
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${APP_URL}/user/dashboard`,
    });
  };

  const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: `${APP_URL}/user/dashboard`,
    });
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
          }) => (
            <form onSubmit={handleSubmit}>
              <Container maxWidth="md">
                <Typography variant="h2" align="center">
                  Entre na sua conta
                </Typography>

                <Box sx={{ padding: 3 }} align="center">
                  <Button
                    sx={{
                      padding: 2,
                    }}
                    onClick={handleGoogleLogin}
                    variant="contained"
                    color="primary"
                    startIcon={
                      <Image
                        width={20}
                        height={20}
                        alt="google logo"
                        src="/images/google.svg"
                      />
                    }
                  >
                    Entre com Google
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                    width: '100%',
                    height: '1px',
                    margin: '10px',
                  }}
                  align="center"
                >
                  <span
                    style={{
                      backgroundColor: 'rgb(242,244,245)',
                      padding: '0 30px',
                    }}
                  >
                    Ou
                  </span>
                </Box>

                <Box
                  sx={{
                    backgroundColor: theme.palette.background.white,
                    marginTop: 3,
                    padding: 3,
                    boxShadow: "0 0 7px gray",
                    borderRadius: 2,
                  }}
                >
                  {router.query.i === '1' && (
                    <Alert severity="error" sx={{ margin: 5 }}>
                      Usuário ou senha inválidos
                    </Alert>
                  )}

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
          )}
        </Formik>
      </TemplateDefault>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      APP_URL: process.env.APP_URL,
    },
  };
}

export default SignIn;