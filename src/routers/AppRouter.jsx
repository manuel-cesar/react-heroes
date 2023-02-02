import React, { useContext } from 'react';
import { Route, Routes} from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

  const { user } = useContext( AuthContext);
  return (
    <BrowserRouter>

      <Routes>

        
        <Route element={ <PublicRoute  isAuthenticated={ user.logged }/> }>
        <Route path='/login' element={ <LoginScreen /> } />
        </Route>

        <Route element={ <PrivateRoute  isAuthenticated={ user.logged }/> }>
          <Route path='/*' element={ <DashboardRoutes /> } />
        </Route>

      </Routes>

    </BrowserRouter>

  )
}
