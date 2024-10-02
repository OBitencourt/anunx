
import {Button, Box, Container, Select, TextField, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import { useTheme } from '@emotion/react'

const Publish = () => {
    const theme = useTheme()

    return(
        <>
            <TemplateDefault
                
            >
                <Container 
                    
                    maxWidth="sm"  
                    sx={{mt:8, mb: 6}}              
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