
import { Button, Container, Grid, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'

import Card from '../../src/components/Card'

const Home = () => {
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
                        <Card 
                            image={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'}
                            title='Produto X'
                            subtitle='R$60'
                            actions={
                                <>
                                    <Button size="small" color="primary">
                                        Editar
                                    </Button>
                                    <Button size="small" color="primary">
                                        Remover
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            image={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'}
                            title='Produto X'
                            subtitle='R$60'
                            actions={
                                <>
                                    <Button size="small" color="primary">
                                        Editar
                                    </Button>
                                    <Button size="small" color="primary">
                                        Remover
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            image={'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'}
                            title='Produto X'
                            subtitle='R$60'
                            actions={
                                <>
                                    <Button size="small" color="primary">
                                        Editar
                                    </Button>
                                    <Button size="small" color="primary">
                                        Remover
                                    </Button>
                                </>
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}


Home.requireAuth = true

export default Home