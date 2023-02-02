import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const NavBar = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    
    const { user: { name }, dispatch } = useContext( AuthContext );
    const action = { type: types.logout };

    const handleLogout = () => {

        navigate("/login", { replace: true })

        dispatch( action );
    }

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ( { isActive } ) =>  "nav-item nav-link" + (isActive ? "active" : "") }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ( { isActive } ) =>  "nav-item nav-link" + (isActive ? "active" : "") }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ( { isActive } ) =>  "nav-item nav-link" + (isActive ? "active" : "") }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                       { user.name }
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}