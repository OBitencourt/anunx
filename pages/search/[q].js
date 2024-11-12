
import TemplateDefault from '../../src/templates/Default'
import { Container, Typography, Box, Grid, IconButton, Paper, InputBase} from '@mui/material'
import { Search } from '@mui/icons-material'
import styled from 'styled-components'
import Card from '../../src/components/Card'
import Link from 'next/link'
import formatCurrency from '../../src/utils/currency'
import slugify from 'slugify'

import { useState } from 'react'
import { useRouter } from 'next/router'

const StyledBox = styled(Box)`
    background-color: white;
    padding: 30px;
    margin-bottom: 30px;
`

import ProductsModel from '../../src/models/products'

const List = ({
    products,
    
}) => {
    console.log()

    const router = useRouter()

    const [search, setSearch] = useState('')

    const handleSubmitSearch = () => {
        router.push({
            pathname: `/search/${search}`
        })
    }


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
                                    onChange={(e) => {
                                        setSearch(e.target.value)
                                    }}
                                
                                    placeholder='Ex.: iPhone 12 com garantia'
                                    fullWidth
                                    variant='outlined'
                                />
                                <IconButton onClick={handleSubmitSearch}>
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
                                    ENCONTRADOS {products.length} ANÚNCIOS 
                                </Typography>

                                <Grid container spacing={4} sx={{marginTop: 1}}>
                                    
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
                            </StyledBox>
                        </Grid>
                    </Grid>
                </Container>

            </TemplateDefault>
        </>
    )
}

export async function getServerSideProps ({ query }) {

    const { q } = query

    // await dbConnect()

    const products = await ProductsModel.find({
        $or: [
            {
                title: { $regex: q, $options: 'i' }
            },
            {
                description: { $regex: q, $options: 'i' }
            }
        ]
    })

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
            q
        },

    }
}

export default List