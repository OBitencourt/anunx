import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Auth = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {

        if (status === 'loading') {
            return <p>Loading...</p>; // ou um componente de loading
        }
    
        if (!session) {
            router.push('/auth/signin'); // redireciona para a página de login se não estiver autenticado
            return null;
        }
    }, [session])


    return children;
}

export default Auth