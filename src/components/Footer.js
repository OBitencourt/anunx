import { Box, Container, Divider, Grid, Typography } from "@mui/material"
import Link from "next/link"



const Footer = () => {
    return ( 
        <Container 
            maxWidth='lg'
            component='footer'
            sx={{marginTop: 2, paddingBottom: 2, paddingTop: 3}}
        >
            <Divider sx={{marginBottom: 5}} />
            <Grid container spacing={3}>
                <Grid 
                    item
                    xs={6}
                    sm={3}
                >
                    <Box textAlign='center'>
                        <Link href='#' legacyBehavior passHref>
                            <Typography color="textSecondary" variant="subtitle1">Ajuda e Contato</Typography> 
                        </Link> 
                    </Box>
                    
                </Grid>
                <Grid 
                    item
                    xs={6}
                    sm={3}
                >
                    
                    <Box textAlign='center'>
                        <Link href='#' legacyBehavior passHref>
                            <Typography color="textSecondary" variant="subtitle1">Dicas de Segurança</Typography> 
                        </Link> 
                    </Box>
                    
                </Grid>
                <Grid 
                    item
                    xs={6}
                    sm={3}
                >
                   
                    <Box textAlign='center' >
                        <Link href='#' legacyBehavior passHref>
                            <Typography color="textSecondary" variant="subtitle1">Anunciar e Vender</Typography> 
                        </Link> 
                    </Box>
                    
                </Grid>
                <Grid 
                    item
                    xs={6}
                    sm={3}
                >
                    
                    <Box textAlign='center'>
                        <Link href='#' legacyBehavior passHref>
                            <Typography color="textSecondary" variant="subtitle1">Plano Profissional</Typography> 
                        </Link> 
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer