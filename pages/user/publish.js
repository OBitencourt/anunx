
import {
    Button,
    Box,
    Container,
    Select,
    Typography,
    IconButton,
    InputLabel,
    InputAdornment, 
    MenuItem,
    FormControl,
    FormHelperText,
    Input
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'
import { useTheme } from '@emotion/react'

import styled from 'styled-components'
import { DeleteForever } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'

// import { useState } from 'react'

import { Formik } from 'formik'
import * as yup from 'yup'

const Dropzone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 150px;
    border: 2px dashed black;
    padding: 10px;
    margin: 15px 15px 15px 0;
    cursor: pointer;  
    

`

const Thumb = styled.div`
    width: 200px;
    height: 150px;
    margin: 15px 15px 15px 0;
    background-color: black;
    background-size: cover;
    background-position: center center;
    flex-wrap: wrap;
    position: relative;

    &:hover .mask{
        display: flex;
    }

    .mask {
        display: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba(0,0,0,0.7);
        height: 100%;
        width: 100%;

    }

    .mainImage {
        background-color: blue;
        width: 40%;
        position: absolute;
        bottom: 0;
        padding-left: 5px;
        border-top-right-radius: 7px;
    }
`

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Título muito grande.')
        .required('Campo obrigatório'),
    
    category: yup.string()
        .required('Campo obrigatório'),
    description: yup.string()
        .min(30, 'Escreva uma descrição com pelo menos 30 caracteres')
        .required('Campo obrigatório'),
    price: yup.number()
        .required('Campo obrigatório'),
    email: yup.string().email('Digite um email válido')
        .required('Campo obrigatório'),
    name: yup.string()
        .required('Campo obrigatório'),
    phone: yup.number('Digite um telefone válido')
        .required('Campo obrigatório'),
    files: yup.array()
        .min(1, 'Envie pelo menos uma foto')
        .required('Campo obrigatório')
})

const Publish = () => {
    const theme = useTheme()

    return(
        <>
            <TemplateDefault>
                <Formik
                    initialValues={{
                        title: '',
                        category: '',
                        description: '',
                        price: '',
                        name: '',
                        phone: '',
                        email: '',
                        files: []
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('boa enviou o form', values)
                    }}
                >
                    {
                        ({  
                            touched,
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            setFieldValue
                        }) => {
                            // console.log(errors)

                            const {getRootProps, getInputProps} = useDropzone({
                                accept: 'image/*',
                                onDrop: (acceptedFile) => {
                                    const newFiles = acceptedFile.map(file => {
                                        return Object.assign(file, {
                                            preview: URL.createObjectURL(file)
                                        })
                                    })

                                    // setFieldValue('nome', 'valor')

                                    setFieldValue('files', [
                                        ...values.files,
                                        ...newFiles,
                                    ])
                                }   
                            })
                        
                            const handleRemoveFile = (fileName) => {
                                const newFilesState = values.files.filter(file => file.name !== fileName)
                                setFieldValue('files', newFilesState)
                            }

                            return (
                                <form onSubmit={handleSubmit}>
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
                                            
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '2px 2px 10px black', borderRadius: 2}}
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
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '2px 2px 10px black', borderRadius: 2}}
                                        >
                                            <Typography variant="h6" component="h6" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                                Imagens
                                            </Typography>
                                            <Typography variant="body2" component="div" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                                A primeira imagem é a foto principal do seu anúncio.
                                            </Typography>

                                            {
                                                errors.files && touched.files
                                                
                                                ? <Typography color='error' variant='body2'>{errors.files }</Typography>
                                                : null
                                            }
                                            
                                            <Box sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                            }}>
                                                <Dropzone style={errors.files && touched.files ? {border: '2px dashed red'} : {border: '2px dashed black'}} error={errors.files && touched.files}  {...getRootProps()}>
                                                    <input name='files' {...getInputProps()}/>
                                                    <Typography color={errors.files && touched.files ? 'error' : 'textPrimary'} variant="body2">
                                                        Clique para adicionar ou arraste a imagem para aqui!
                                                    </Typography>
                                                </Dropzone>
                                                {
                                                    values.files.map((file, index) => (
                                                        
                                                        <Thumb // dinâmico
                                                            key={file.name}
                                                            style={{backgroundImage: `url(${file.preview})`}}
                                                        >   
                                                            {
                                                                index === 0 ?

                                                                <Box className='mainImage'>
                                                                    <Typography variant='body2' color="secondary">
                                                                        Principal
                                                                    </Typography>
                                                                </Box>

                                                                :
                                                                
                                                                null
                                                            }
                                                                <Box className='mask'>
                                                                <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                                                    <DeleteForever fontSize='large'/>
                                                                </IconButton>
                                                                </Box>
                                                        </Thumb>
                                                    ))
                                                }
                                            </Box>
                                        </Box>
                                    </Container>
                                    <Container
                                        maxWidth="md"
                                        sx={{mt:6, mb: 3}}
                                    >
                                        <Box
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '2px 2px 10px black', borderRadius: 2}}
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
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '2px 2px 10px black', borderRadius: 2}}
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
                                            sx={{backgroundColor: theme.palette.background.white, padding: 3, boxShadow: '2px 2px 10px black', borderRadius: 2}}
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

                                            <Button
                                                color="primary"
                                                variant="contained"
                                                type='submit'
                                                
                                            >
                                                Publicar Anúncio
                                            </Button>
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

export default Publish