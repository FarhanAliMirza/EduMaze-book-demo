import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Payments from '../components/Payments';

    const Payment = () => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
                <Payments /> 
            </article>
        )
        
    )
}

export default Payment