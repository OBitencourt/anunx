
import TemplateDefault from '../../src/templates/Default'
import { Container, Typography, Box, Grid, IconButton, Paper, InputBase} from '@mui/material'
import { Search } from '@mui/icons-material'
import styled from 'styled-components'
import Card from '../../src/components/Card'

const StyledBox = styled(Box)`
    background-color: white;
    padding: 30px;
    margin-bottom: 30px;
`

const List = () => {
    return (
        <>
            <TemplateDefault>
                <Container
                    maxWidth='lg'
                    
                >
                    <Grid spacing={3} container>
                        <Grid xs={12} md={12} lg={12} item>

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
                        </Grid>
                        <Grid 
                            item
                            xs={12}
                            sm={12}
                            md={12}
                        >
                            <StyledBox>
                                <Typography
                                    component='h6'
                                    variant='h6'
                                >
                                    Anúncios
                                </Typography>
                                <Typography
                                    component='span'
                                    variant='subtitle2'
                                >
                                    ENCONTRADOS 200 ANúNCIOS
                                </Typography>

                                <Grid container spacing={4} sx={{marginTop: 1}}>
                                    <Grid item xs={12} md={4} sm={6}>
                                        <Card 
                                            image={'https://picsum.photos/900/1100'}
                                            title='Produto X'
                                            subtitle='R$ 50,00'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4} sm={6}>
                                        <Card 
                                            image={'https://picsum.photos/900/1100'}
                                            title='Produto X'
                                            subtitle='R$ 50,00'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4} sm={6}>
                                        <Card 
                                            image={'https://picsum.photos/900/1100'}
                                            title='Produto X'
                                            subtitle='R$ 50,00'
                                        />
                                    </Grid>
                                </Grid>
                            </StyledBox>
                        </Grid>
                    </Grid>
                </Container>

            </TemplateDefault>
        </>
    )
}

export default List