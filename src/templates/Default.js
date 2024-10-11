import { Box } from '@mui/material'
import Footer from '../components/footer'
import Header from '../components/header'

const Default = ({children}) => {

    return (
        <>
            <Header />
            <Box 
                sx={{
                    padding: 6,
                }}
            >
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Default
