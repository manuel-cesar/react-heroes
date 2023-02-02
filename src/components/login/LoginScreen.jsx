import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  const { dispatch } = useContext( AuthContext );

  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastpath') || '/'
    
    const action = {
      type: types.login,
      payload: {
        name: 'ManuelCesar'
      }
    }

    dispatch( action );

    navigate(lastPath, { replace: true });
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr></hr>

        <button
          className='btn btn-primary'
          onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  )
}
