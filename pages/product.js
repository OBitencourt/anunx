
import { Box, Container, Grid, Typography, Chip, Card, CardHeader, Avatar, CardMedia } from '@mui/material'
import TemplateDefault from '../src/templates/Default'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'


const StyledBox = styled(Box)`
    padding: 30px;
    margin-bottom: 30px;
    background-color: white;
`

const Product = () => {
    return (
        <>
            <TemplateDefault>
                <Container
                    maxWidth='lg'
                >
                    <Grid container spacing={3}>
                        <Grid item
                            xs={8}
                        >
                            <StyledBox
                                sx={{
                                    backgroundColor: 'white',
                                    padding: 3,
                                    marginBottom: 3,
                                }}
                            >
                                <Carousel
                                    autoPlay={false}
                                    navButtonsProps={{
                                        style: {
                                            backgroundColor: 'white',
                                            color: 'black'
                                        }
                                    }}
                                    animation='slide'
                                >

                                    <Card
                                        sx={{
                                            height: '100%',
                                        }}
                                    >
                                        <CardMedia 
                                            sx={{paddingTop: '56%'}}
                                            image="https://randomwordgenerator.com/img/picture-generator/52e4d1424f5aa914f1dc8460962e33791c3ad6e04e5074417d2e72d2954ac5_640.jpg"
                                            title="Titulo da imagem"
                                        />
                                        
                                    </Card>
                                    <Card
                                        sx={{
                                            height: '100%',
                                        }}
                                    >
                                        <CardMedia 
                                            image="https://mashedradish.com/wp-content/uploads/2017/03/random.jpg"
                                            sx={{paddingTop: '56%'}}
                                            
                                            
                                            title="Titulo da imagem"
                                        />
                                        
                                    </Card>
                                </Carousel>
                            </StyledBox>
                            <StyledBox
                                sx={{
                                    backgroundColor: 'white',
                                    padding: 3,
                                    marginBottom: 3,
                                }}
                            >
                                <Typography
                                    component='h4'
                                    variant='caption'
                                    
                                >
                                    Publicado 3 dias atrás
                                </Typography>
                                <Typography
                                    component='h4'
                                    variant='h4'
                                    sx={{
                                        margin: '15px 0px',
                                    }}
                                >
                                    Jaguar
                                </Typography>
                                <Typography
                                    component='h4'
                                    variant='h4'
                                    fontWeight='bold'
                                    sx={{marginBottom: 1,}}
                                >
                                    R$ 50.000,00
                                </Typography>
                                <Chip label='Categoria' />
                            </StyledBox>
                            <StyledBox
                                sx={{
                                    backgroundColor: 'white',
                                    padding: 3,
                                    marginBottom: 3,
                                }}
                            >
                                
                                <Typography
                                    component='h6'
                                    variant='h6'                                    
                                    sx={{marginBottom: 1,}}
                                >
                                    Descrição
                                </Typography>
                                <Typography
                                    component='p'
                                    variant='body2'                                    
                                    
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                
                            </StyledBox>
                        </Grid>
                        <Grid item
                            xs={4}
                        >
                            <Card
                                sx={{
                                    padding: 3,
                                    marginBottom: 3,
                                }}
                                elevation={0}
                            >
                                <CardHeader 
                                    avatar={
                                        <Avatar>A</Avatar>
                                    }
                                    title='Arthur Bitencourt'
                                    subheader='arthursilvadevelop@gmail.com'
                                />
                                <CardMedia
                                    image='https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg'
                                />

                            </Card>
                            <StyledBox>
                                <Typography
                                    component='h6'
                                    variant='h6'                                    
                                    sx={{marginBottom: 1,}}
                                >
                                    Descrição
                                </Typography>
                            </StyledBox>
                        </Grid>
                    </Grid>
                </Container>
            </TemplateDefault>
        </>
    )
}

export default Product