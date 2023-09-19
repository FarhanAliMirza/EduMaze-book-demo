import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Payments = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
                Payment
            </article>
        )
        
    )
}

export default Payments