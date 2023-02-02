import React, { useMemo }  from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm/useForm';
import { HeroCard } from '../hero/HeroCard';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';



export const SearchScreen = () => {

  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );

  const navigate = useNavigate();

  const initialForm = { searchHero: q }
  const [ formValues, handleInputChange ] = useForm( initialForm ) ;
  const { searchHero } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]) ;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate( `?q=${ searchHero }` );
  }

  return (
    <div>
        <h2>Search Screen</h2>
        <hr></hr>

        <div className='row'>

          <div className='col-4'>
            <h4>Search Form</h4>
            <hr></hr>

            <form onSubmit={ handleSearch }>
              <input
                type='text'
                placeholder='Find hero'
                className='form-control'  
                name='searchHero'
                value={ searchHero }
                onChange={ handleInputChange }
              />

              <button
                type='submit'
                className='btn m-1 btn-block btn-outline-primary'
              >
                Search
              </button>

            </form>
          </div>

          <div className='col-8'>

            <h4>Results</h4>
            <hr></hr>

            {
              (q === '')
                  && <div className='alert alert-info'>
                  Search a Hero
                  </div>
            }
            {
              (q !== '' && heroesFiltered.length === 0)
                  && <div className='alert alert-danger'>
                  No Hero Found with { q }
                  </div>
            }


            {
              heroesFiltered.map( hero => (
                <HeroCard
                  key={ hero.id }
                  hero={ hero }
                />
              ))
            }            

          </div>
        </div>
    </div>
  )
}
