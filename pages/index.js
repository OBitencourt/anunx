
import {
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material'
import TemplateDefault from '../src/templates/Default'
import { Search } from '@mui/icons-material'

const Index = () => {
    return (
        <>
            <TemplateDefault>

                <Container
                    maxWidth='md'
                    
                >

                    <Typography
                        variant='h3'
                        component='h1'
                        align='center'
                        color='textPrimary'
                    >
                        O que deseja encontrar?
                    </Typography>
                    <Paper
                        sx={{
                            display:'flex', 
                            justifyContent: 'center',
                            padding: 1,
                            marginTop: '20px',
                        }}
                    >
                        <InputBase 
                            placeholder='Ex.: iPhone 12 com garantia'
                            fullWidth
                            variant='outlined'
                        />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </Paper>
                </Container>

                <Container
                    maxWidth='lg'
                    sx={{padding: '40px'}}
                >
                    <Typography
                        variant="h4"
                        component='h2'
                        align='center'
                        sx={{mb: 2}}
                        color='textPrimary'
                    >
                        Destaques
                    </Typography>
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
                                
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </TemplateDefault>
        </>
    )
}

export default Index