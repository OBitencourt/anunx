
import { Button, Container, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'

export default function Home ()  {
    return (
        <TemplateDefault>
            <Container
                maxWidth="sm"
                
            >
                <Typography align='center' sx={{mt:8, mb: 6}} component="h1" variant="h2">
                    Meus Anúncios
                </Typography>
                <Button sx={{display: 'block', m: 'auto'}} variant='contained'>
                    Publicar novo anúncio
                </Button>
            </Container>
        </TemplateDefault>
    )
}

