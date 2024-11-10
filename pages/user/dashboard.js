
import { Button, Container, Grid, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import ProductsModel from '../../src/models/products'
import Card from '../../src/components/Card'
import { getSession } from 'next-auth/react'
import dbConnect from '../../src/utils/dbConnect'
import formatCurrency from '../../src/utils/currency'

const Dashboard = ({ products }) => {
    console.log(products)

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
                    {
                        products.map(product => (
                            <Grid key={product._id} item xs={12} sm={6} md={4} >
                                <Card 
                                    image={`/uploads/${product.files[0].name}`}
                                    title={product.title}
                                    subtitle={formatCurrency(product.price)}
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
                        ))
                    }
                    
                </Grid>
            </Container>
        </TemplateDefault>
    )
}


Dashboard.requireAuth = true

export async function getServerSideProps({ req }) {
    const session = await getSession({req})
    await dbConnect()    

    const products = await ProductsModel.find({ 'user.id': session.userId })


    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }
}


export default Dashboard