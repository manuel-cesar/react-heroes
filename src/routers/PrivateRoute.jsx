import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ isAuthenticated }) => {

    const location = useLocation();
    localStorage.setItem( 'lastpath', location.pathname);
    
    if( !isAuthenticated ) return  <Navigate to='/login' />

    return (<Outlet />)

}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}