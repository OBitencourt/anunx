import Header from '../components/header'

const Default = ({children}) => {

    return (
        <>
            <Header />
            {children}
            <footer>Footer</footer>
        </>
    )
}

export default Default
