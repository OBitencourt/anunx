import Footer from '../components/footer'
import Header from '../components/header'

const Default = ({children}) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default
