// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import Cookies from "js-cookie";
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    useEffect(()=> {
        function verificaCookie() {
            // const hasCookie = Cookies.get('FantaKey');

            if(true) {
                setUser(true);
            }

            setLoading(false);            
        }
        verificaCookie();
    }, []);
    

    return (
        <>
        {loading ? (
            <h1 className='title-loading'>Carregando...</h1>
        ) : (
            
            user ? (
                children
            ) : (
                <Navigate to='/' />
            )
        
        )}
        </>
    )        
}

PrivateRoute.propTypes = {
    children: PropTypes.array.isRequired,
}