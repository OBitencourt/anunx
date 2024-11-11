
import { Box, Container, Grid, Typography, Chip, Card, CardHeader, Avatar, CardMedia } from '@mui/material'
import TemplateDefault from '../../../src/templates/Default'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import dbConnect from '../../../src/utils/dbConnect'
import ProductsModel from '../../../src/models/products'
import formatCurrency from '../../../src/utils/currency'


const StyledBox = styled(Box)`
    padding: 30px;
    margin-bottom: 30px;
    background-color: white;
`

const Product = ({
    product
}) => {
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
                                        {
                                            
                                            product.files.map(file => {
                                                return (  // Adicione o 'return' aqui
                                                    <Card
                                                        key={file.name}
                                                        sx={{
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <CardMedia 
                                                            sx={{paddingTop: '56%'}}
                                                            image={`/uploads/${file.name}`}
                                                            title={product.title}
                                                        />
                                                    </Card>
                                                )
                                            })
                                            
                                        }                   
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
                                    Publicado 3 dias atrás -- TO DO
                                </Typography>
                                <Typography
                                    component='h4'
                                    variant='h4'
                                    sx={{
                                        margin: '15px 0px',
                                    }}
                                >
                                    {product.title}
                                </Typography>
                                <Typography
                                    component='h4'
                                    variant='h4'
                                    fontWeight='bold'
                                    sx={{marginBottom: 1,}}
                                >
                                    {formatCurrency(product.price)}
                                </Typography>
                                <Chip label={product.category} />
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
                                    {product.description}
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
                                        <Avatar
                                            src={product.user.image}
                                        >
                                            { product.user.image || product.user.name[0]}
                                        </Avatar>
                                    }
                                    title={product.user.name}
                                    subheader={product.user.email}
                                />
                                <CardMedia
                                    image={product.user.image}
                                    title={product.user.name}
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

export async function getServerSideProps({ query }) {
    const { id } = query

    await dbConnect()

    const product = await ProductsModel.findOne({ _id: id})

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}

export default Product