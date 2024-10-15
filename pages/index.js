
import {
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
} from '@mui/material'
import TemplateDefault from '../src/templates/Default'
import { Search } from '@mui/icons-material'
import Card from '../src/components/Card'

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
                            <Card 
                                image={'https://picsum.photos/id/2/900/1100'}
                                title='Produto X'
                                subtitle='R$60'
                            />
                                
                            
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card 
                                image={"https://picsum.photos/id/3/900/1100"}
                                title='Produto X'
                                subtitle='R$60'
                            />
                                
                                
                            
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card 
                                image={"https://picsum.photos/id/10/900/1100"}
                                title='Produto X'
                                subtitle='R$60'
                            />
                                
                            
                        </Grid>
                    </Grid>
                </Container>
            </TemplateDefault>
        </>
    )
}

export default Index