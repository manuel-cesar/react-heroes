import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';


export const PublicRoute = ({ isAuthenticated }) => {

    if( isAuthenticated ) return  <Navigate to='/' />

    return (<Outlet />)

}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}