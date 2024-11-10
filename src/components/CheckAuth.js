import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Auth = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin'); // Redireciona se o status for 'unauthenticated'
        }
    }, [status, router]);

    if (status === 'loading') {
        return <p>Loading...</p>; // Mensagem de carregamento enquanto o status é 'loading'
    }

    return children;
};

export default Auth;
