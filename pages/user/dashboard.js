
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'

export default function Home ()  {
    return (
        <TemplateDefault>
            <Container
                maxWidth="sm"
                
            >
                <Typography align='center' sx={{ mb: 6}} component="h1" variant="h2">
                    Meus Anúncios
                </Typography>
                <Button sx={{display: 'block', m: 'auto'}} variant='contained'>
                    Publicar novo anúncio
                </Button>
            </Container>
            <Container
                sx={{mt: 15}}
                maxWidth="md"
                
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card>
                            <CardMedia 
                                sx={{paddingTop: '56%'}}
                                image={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'}
                                title="Titulo do Anuncio"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography>
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Editar
                                </Button>
                                <Button size='small' color='primary'>
                                    Remover
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia 
                                sx={{paddingTop: '56%'}}
                                image={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'}
                                title="Titulo do Anuncio"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography>
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Editar
                                </Button>
                                <Button size='small' color='primary'>
                                    Remover
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia 
                                sx={{paddingTop: '56%'}}
                                image={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'}
                                title="Titulo do Anuncio"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Produto X
                                </Typography>
                                <Typography>
                                    R$ 60,00
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Editar
                                </Button>
                                <Button size='small' color='primary'>
                                    Remover
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

