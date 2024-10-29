import axios from 'axios'

import TemplateDefault from '../../../src/templates/Default'


import {
    Box,
    Container,
    FormControl,
    InputLabel,
    Typography,
    Input,
    FormHelperText,
    Button,
    CircularProgress
} from '@mui/material'

import theme from '../../../src/theme'

import { Formik } from 'formik'

import { validationSchema, initialValues } from './formValues'

import useToasty from '../../../src/contexts/Toasty'

import { useRouter } from 'next/router'

const SignUp = () => {

    const router = useRouter()

    const { setToasty } = useToasty()

    const handleFormSubmit = async values => {

        const response = await axios.post('/api/users', values)

        if (response.data.sucess) {
           setToasty({
                open: true,
                severity: 'success',
                text: 'Cadastro realizado com sucesso'
           })
           router.push('/auth/signin')

        }

    }


    return (

        <>
            <TemplateDefault>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {
                        ({
                            values,
                            touched,
                            errors,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => {
                            

                            return (
                                
                                <form onSubmit={handleSubmit}>
                                    <Container maxWidth='md'>
                                        <Typography variant='h2' align='center'>
                                            Crie sua conta
                                        </Typography>
                                        <Typography variant='h6' fontWeight={400} align='center'>
                                            E anuncie para todo o Brasil
                                        </Typography>

                                        <Box
                                            sx={{backgroundColor: theme.palette.background.white, marginTop: 3,padding: 3, boxShadow: '0 0 7px gray', borderRadius: 2}}
                                        >

                                            <FormControl error={errors.name && touched.name} sx={{mt: 1}} fullWidth>
                                                <InputLabel>
                                                    Nome
                                                </InputLabel>
                                                <Input 
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    fullWidth
                                                />
                                                <FormHelperText>
                                                    {errors.name && touched.name ? errors.name : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <FormControl error={errors.email && touched.email} sx={{mt: 2}} fullWidth>
                                                <InputLabel>
                                                    E-mail
                                                </InputLabel>
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

                                            <FormControl error={errors.password && touched.password} sx={{mt: 2}} fullWidth>
                                                <InputLabel>
                                                    Senha
                                                </InputLabel>
                                                <Input 
                                                    type='password'
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    fullWidth
                                                />
                                                <FormHelperText>
                                                    {errors.password && touched.password ? errors.password : null}
                                                </FormHelperText>
                                            </FormControl>
                                            
                                            <FormControl error={errors.passwordConf && touched.passwordConf} sx={{mt: 2}} fullWidth>
                                                <InputLabel>
                                                    Confirme sua senha
                                                </InputLabel>
                                                <Input 
                                                    type='password'
                                                    name="passwordConf"
                                                    value={values.passwordConf}
                                                    onChange={handleChange}
                                                    fullWidth
                                                />
                                                <FormHelperText>
                                                    {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                                </FormHelperText>
                                            </FormControl>


                                            {
                                                isSubmitting
                                                ? (
                                                    <CircularProgress sx={{display: 'block', margin: '15px auto'}} />
                                                )
                                                : (
                                                    <Button type='submit' variant='contained' fullWidth sx={{mt: 3, mb: 2}}>
                                                        Cadastrar
                                                    </Button>
                                                )
                                            }
                                            

                                            <Typography variant='body1' align='left'>
                                                Já tem uma conta? Entre aqui!
                                            </Typography>
                                        </Box>
                                    </Container>
                                </form>
                            )
                        }
                    }
                </Formik>
            </TemplateDefault>

        </>
    )
}

export default SignUp