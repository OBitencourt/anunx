
import {
    Button,
    Box,
    Container,
    Select,
    Typography,

    InputLabel,
    InputAdornment, 
    MenuItem,
    FormControl,
    FormHelperText,
    Input,
    CircularProgress
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { useTheme } from '@emotion/react'


import { Formik } from 'formik'


import { initialValues, validationSchema } from './formValues'
import FileUpload from '../../../src/components/FileUpload'

import useToasty from '../../../src/contexts/Toasty'

import { useRouter } from 'next/router'

import axios from 'axios'

import { getSession } from 'next-auth/react'

const Publish = ({ userId, image}) => {
    const theme = useTheme()
    const { setToasty } = useToasty()
    const router = useRouter()
    
    const formValues = {
        ...initialValues,
        userId: userId,
        image: image
    }


    const handleFormSubmit = values => {
        
        const handleSuccess = () => {
            setToasty({
                open: true,
                text: 'Anúncio cadastrado com sucesso',
                severity: 'success'
            })

            router.push('/user/dashboard')
        }

        const handleError = () => {
            setToasty({
                open: true,
                text: 'Anúncio cadastrado com sucesso',
                severity: 'success'
            })
            router.push('/user/dashboard')
        }

        const formData = new FormData()

        for( let field in values) {
            if (field === 'files') {
                values.files.forEach(file => {
                    formData.append('files', file)
                })
            } else {
                formData.append(field, values[field])
            }
        }

        axios.post('http://localhost:3000/api/products/post', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
            .then(handleSuccess)
            .catch(handleError)
    }

    return(
        <>
            <TemplateDefault>
                <Formik
                    initialValues={formValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {
                        ({  
                            touched,
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                            isSubmitting
                        }) => {
                            // console.log(errors)

                            

                            return (
                                <form onSubmit={handleSubmit}>
                                    <Input type='hidden' name="userId" value={values.userId} />
                                    <Input type='hidden' name="userId" value={values.image} />

                                    <Container 
                                        
                                        maxWidth="sm"  
                                                    
                                    >
                                        <Typography color="textPrimary" component="h1" variant="h2" align="center">
                                            Publicar Anúncio
                                        </Typography>
                                        <Typography color="textPrimary" component="h5" variant="h5" align="center">
                                            Quanto mais detalhado, melhor!
                                        </Typography>
                                    </Container>
                                    <Container 
                                        maxWidth="md"  
                                        sx={{mt:6, mb: 3}}              
                                    >
                                        <Box
                                            
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '0 0 7px gray', borderRadius: 2}}
                                        >

                                            <FormControl fullWidth error={errors.title && touched.title}>
                                                <InputLabel sx={{
                                                    fontWeight: 500
                                                }}>
                                                    Título do Anuncio
                                                </InputLabel>

                                                <Input
                                                    name='title'
                                                    onChange={handleChange}
                                                    value={values.title}
                                                    variant='standard' 
                                                    
                                                    

                                                />
                                                <FormHelperText>    
                                                    {errors.title && touched.title ? errors.title : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <br/><br/>


                                            <FormControl fullWidth error={errors.category && touched.category}>
                                                <InputLabel sx={{
                                                    fontWeight: 500
                                                }}>
                                                    Categoria
                                                </InputLabel>
                                                <Select
                                                    name='category'
                                                    value={values.category}
                                                    fullWidth
                                                    onChange={handleChange}
                                                    variant='standard'
                                                >

                                                    <MenuItem value="Bebê e Crianças">Bebê e Crianças</MenuItem>
                                                    <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                    <MenuItem value="Moda">Moda</MenuItem>
                                                    <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                                    <MenuItem value="Serviços">Serviços</MenuItem>
                                                    <MenuItem value="Lazer">Lazer</MenuItem>
                                                    <MenuItem value="Animais">Animais</MenuItem>
                                                    <MenuItem value="Móveis, Casa e Jardim">Móveis, Casa e Jardim</MenuItem>
                                                    <MenuItem value="Imóveis">Imóveis</MenuItem>
                                                    <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                    <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                                    <MenuItem value="Esportes">Esportes</MenuItem>
                                                    <MenuItem value="Tecnologias">Tecnologias</MenuItem>
                                                    <MenuItem value="Emprego">Emprego</MenuItem>
                                                    <MenuItem value="Outros">Outros</MenuItem>
                                                </Select>
                                                <FormHelperText>
                                                    {errors.category && touched.category ? errors.category : null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>
                                    <Container
                                        maxWidth="md"
                                        sx={{mt:6, mb: 3}}
                                    >
                                        <Box
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '0 0 7px gray', borderRadius: 2}}
                                        >
                                            <FileUpload 
                                            
                                                files={values.files}
                                                errors={errors.files}
                                                touched={touched.files}
                                                setFieldValue={setFieldValue}
                                            />
                                        </Box>
                                    </Container>
                                    <Container
                                        maxWidth="md"
                                        sx={{mt:6, mb: 3}}
                                    >
                                        <Box
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '0 0 7px gray', borderRadius: 2}}
                                        >

                                            <FormControl fullWidth error={errors.description && touched.description}>
                                                
                                                <InputLabel sx={{
                                                    fontWeight: 500
                                                }}>
                                                    Escreva os detalhes do que está vendendo
                                                </InputLabel>
                                                <Input
                                                    name='description'                                                   
                                                    multiline
                                                    rows={6}
                                                    variant="standart"
                                                    fullWidth
                                                    onChange={handleChange}
                                                />
                                                    
                                                <FormHelperText>
                                                    {errors.description && touched.description ? errors.description : null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>
                                    <Container
                                        maxWidth="md"
                                        sx={{mt:6, mb: 3}}
                                    >
                                        <Box
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '0 0 7px gray', borderRadius: 2}}
                                        >
                                            <FormControl fullWidth error={errors.price && touched.price}>
                                                <InputLabel sx={{
                                                    fontWeight: 500
                                                }}>
                                                    Preço
                                                </InputLabel>

                                                <Input
                                                    name='price'
                                                    onChange={handleChange}
                                                    value={values.price}
                                                    variant='standard' 
                                                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                                    

                                                />
                                                <FormHelperText>    
                                                    {errors.price && touched.price ? errors.price : null}
                                                </FormHelperText>
                                            </FormControl>
                                            
                                        </Box>
                                    </Container>           

                                    <Container
                                        maxWidth="md"
                                        sx={{mt:6, mb: 3}}
                                    >
                                        <Box
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '0 0 7px gray', borderRadius: 2}}
                                        >
                                            <Typography variant="h6" component="h6" color="textPrimary">
                                                Dados de Contato
                                            </Typography>
                                            
                                            <FormControl sx={{
                                                marginTop: 3
                                            }} fullWidth error={errors.name && touched.name}>
                                                <InputLabel sx={{
                                                    fontWeight: 500
                                                }}>
                                                    Nome
                                                </InputLabel>

                                                <Input
                                                    name='name'
                                                    onChange={handleChange}
                                                    value={values.name}
                                                    variant='standard' 
                                                    
                                                    

                                                />
                                                <FormHelperText>    
                                                    {errors.name && touched.name ? errors.name : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <FormControl sx={{
                                                marginTop: 3
                                            }}  fullWidth error={errors.email && touched.email}>
                                                <InputLabel sx={{
                                                    fontWeight: 500
                                                }}>
                                                    E-mail
                                                </InputLabel>

                                                <Input
                                                    name='email'
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    variant='standard' 
                                                    
                                                />
                                                <FormHelperText>    
                                                    {errors.email && touched.email ? errors.email : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <FormControl sx={{
                                                marginTop: 3
                                            }}  fullWidth error={errors.phone && touched.phone}>
                                                <InputLabel sx={{
                                                    fontWeight: 500
                                                }}>
                                                    Telefone
                                                </InputLabel>

                                                <Input
                                                    name='phone'
                                                    onChange={handleChange}
                                                    value={values.phone}
                                                    variant='standard' 
                                                    
                                                    

                                                />
                                                <FormHelperText>    
                                                    {errors.phone && touched.phone ? errors.phone : null}
                                                </FormHelperText>
                                            </FormControl>
                                                
                         
                                        </Box>
                                        
                                    </Container>
                                    <Container
                                        maxWidth="md"
                                        sx={{mt:2, mb: 3}}

                                    >
                                        <Box
                                            textAlign="end"
                                        >
                                            {
                                                isSubmitting 
                                                ? <CircularProgress />
                                                
                                                 
                                                : <Button
                                                    color="primary"
                                                    variant="contained"
                                                    type='submit'
                                                    
                                                >
                                                    Publicar Anúncio
                                                </Button>
                                            }

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

Publish.requireAuth = true

export async function getServerSideProps ({ req }) {
    
    const { userId, user } = await getSession({req})

    return {
        props: {
            userId,
            image: user.image
        }
    }
}

export default Publish