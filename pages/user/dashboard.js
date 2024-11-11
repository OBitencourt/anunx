import React, {useState} from 'react';

import { Button, Container, Grid, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import ProductsModel from '../../src/models/products'
import Card from '../../src/components/Card'
import { getSession } from 'next-auth/react'
import dbConnect from '../../src/utils/dbConnect'
import formatCurrency from '../../src/utils/currency'

import {  
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material'
import axios from 'axios';

import useToasty from '../../src/contexts/Toasty'
import Link from 'next/link';

const Dashboard = ({ products }) => {
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const [productId, setProductId] = useState()

    const [removedProducts, setRemovedProducts] = useState([])
    
    const {setToasty} = useToasty()

    const handleClose = () => {
        setOpenConfirmModal(!openConfirmModal);
    };

    const handleClickRemove = (productId) => {
        setOpenConfirmModal(true)
        setProductId(productId)
    }

    const handleConfirmRemove = () => {
        axios.delete('http://localhost:3000/api/products/remove', {
            data: {
                id: productId
            }
        })
            .then(handleSuccess)
            .catch(handleError)
    }

    const handleSuccess = () => {
        console.log('deletou')

        setOpenConfirmModal(false);
        setRemovedProducts([...removedProducts, productId])

        setToasty({
            open: true,
            text: 'Anúncio excluído com sucesso',
            severity: 'success'
        })

    }

    const handleError = () => {
        console.log('não deletou')
        setToasty({
            open: true,
            text: 'Não foi possível excluir o anúncio',
            severity: 'success'
        })
    }

    console.log(products)

    return (
        
        <TemplateDefault>
            <Dialog
                open={openConfirmModal}
                onClose={handleClose}
            >
                <DialogTitle >
                    Deseja realmente remover este anúncio?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Ao confirmar a operação, não poderá voltar mais atrás.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmRemove} autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography align='center' sx={{ mb: 6}} component="h1" variant="h2">
                    Meus Anúncios
                </Typography>

                <Link href={'/user/publish'} passHref legacyBehavior>
                    <Button sx={{display: 'inline-block', m: 'auto'}} variant='contained'>
                        Publicar novo anúncio
                    </Button>
                </Link>
            </Container>
            <Container
                sx={{mt: 15}}
                maxWidth="md"
                
            >
                {
                    products.length === 0 &&
                    <Typography component='div' variant='body1' align='center' color='textPrimary' gutterBottom>
                        Nenhum anúncio publicado
                    </Typography>
                }
                <Grid container spacing={4}>
                    {
                        products.map(product => {
                            if (removedProducts.includes(product._id)) return null

                            return ( 
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
                                                <Button
                                                    size="small" 
                                                    color="primary"
                                                    onClick={
                                                        () => {
                                                            handleClickRemove(product._id)
                                                        }
                                                    }
                                                >
                                                    Remover
                                                </Button>
                                            </>
                                        }
                                    />
                                </Grid> 
                            ) 
                        })
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