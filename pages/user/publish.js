
import {Button, Box, Container, Select, TextField, Typography, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import { useTheme } from '@emotion/react'

import styled from 'styled-components'
import { DeleteForever } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'

import { useState } from 'react'

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

const Publish = () => {
    const theme = useTheme()

    const [files, setFiles] = useState([])

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
            setFiles([
                ...files,
                ...newFiles,
            ])
        }   
    })

    const handleRemoveFile = (fileName) => {
        const newFilesState = files.filter(file => file.name !== fileName)
        setFiles(newFilesState)
    }

    return(
        <>
            <TemplateDefault
                
            >
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
                        <Typography color="textPrimary" component="hh6" variant="h6" align="start">
                            Título do Anúncio
                        </Typography>
                        <TextField
                            variant='standard' 
                            label="ex.: Bicicleta Aro 18 com garantia"
                            size="small"
                            fullWidth
                        />
                        <br/><br/>
                        <Typography
                            component="h6"
                            variant="h6"
                            color="textPrimary"
                        >
                            Categoria
                        </Typography>
                        <Select
                            native
                            value=""
                            fullWidth
                            onChange={() => {}}
                            inputProps={{
                                name: 'age'
                            }}
                        >
                            <option value="">Selecione</option>
                            <option value={1}>Bebê e Crianças</option>
                            <option value={2}>Agricultura</option>
                            <option value={3}>Moda</option>
                            <option value={3}>Carros, Motos e Barcos</option>
                            <option value={3}>Serviços</option>
                            <option value={3}>Lazer</option>
                            <option value={3}>Animais</option>
                            <option value={3}>Móveis, Casa e Jardim</option>
                            <option value={3}>Imóveis</option>
                            <option value={3}>Equipamentos e Ferramentas</option>
                            <option value={3}>Celulares e Tablets</option>
                            <option value={3}>Esportes</option>
                            <option value={3}>Tecnologias</option>
                            <option value={3}>Emprego</option>
                            <option value={3}>Outros</option>
                        </Select>
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
                            Imagens
                        </Typography>
                        <Typography variant="body2" component="div" color='textPrimary'>
                            A primeira imagem é a foto principal do seu anúncio.
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}>
                            <Dropzone sx={{backgroundColor: theme.palette.background.default}} {...getRootProps()}>
                                <input {...getInputProps()}/>
                                <Typography color="textPrimary" variant="body2">
                                    Clique para adicionar ou arraste a imagem para aqui!
                                </Typography>
                            </Dropzone>
                            {
                                files.map((file, index) => (
                                    
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
                        <Typography variant="h6" component="h6" color="textPrimary">
                            Descrição
                        </Typography>
                        <Typography variant="body2" component="div" color='textPrimary'>
                            Escreva os detalhes do que está vendendo
                        </Typography>
                        <TextField
                            multiline
                            rows={6}
                            variant="outlined"
                            fullWidth
                            sx={{mt:2}}
                        >
                            
                        </TextField>
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
                            Preço
                        </Typography>
                        <br />
                        <FormControl
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                            <OutlinedInput 
                                id="outlined-adornment-amount"
                                onChange={() => {}}
                                startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                label="Valor" // O label também deve ser passado como prop
                            />
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

                        <TextField
                            label="Nome"
                            variant="outlined"
                            fullWidth
                            size="small"
                            sx={{mt:2}}
                        >

                        </TextField>
                        
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            size="small"
                            sx={{mt:2}}
                        >

                        </TextField>

                        

                        <TextField
                            label="Telefone"
                            variant="outlined"
                            fullWidth
                            size="small"
                            sx={{mt:2}}
                        >

                        </TextField>

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
                            
                            
                        >
                            Publicar Anúncio
                        </Button>
                    </Box>

                </Container>
            </TemplateDefault>
        </>
    )
}

export default Publish