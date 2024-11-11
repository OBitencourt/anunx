import Link from 'next/link'
import slugify from 'slugify'

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
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import formatCurrency from '../src/utils/currency'

const Index = ({
    products
}) => {
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
                        {
                            products.map(product => {
                                const category = slugify(product.category).toLocaleLowerCase()
                                const name = slugify(product.title).toLocaleLowerCase()

                                return (
                                    <Grid key={product._id} item xs={12} sm={6} md={4} >
                                        <Link href={`/${category}/${name}/${product._id}`} passHref legacyBehavior>
                                            <a
                                                style={
                                                    {
                                                        textDecoration:'none'
                                                    }
                                                }
                                            >
                                                <Card 
                                                    image={`/uploads/${product.files[0].name}`}
                                                    title={product.title}
                                                    subtitle={formatCurrency(product.price)}
                                                />
                                            </a>
                                        </Link>
                                        
                                    </Grid>
                                )
                            })
                        }
                        
                        
                    </Grid>
                </Container>
            </TemplateDefault>
        </>
    )
}

export async function getServerSideProps() {

    await dbConnect()

    const products = await ProductsModel.aggregate([{
        $sample: { size : 6}

    }])

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}

export default Index