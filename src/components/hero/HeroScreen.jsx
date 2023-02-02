import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroId } = useParams();

  const hero = useMemo( () => getHeroById( heroId ), [heroId]);
  
  const handleReturn = () => {
    navigate( -1 );
  }

  if( !hero ) {
    return <Navigate to='/' />
  }

  const imgPath = `/assets/heroes/${hero.id}.jpg`
  
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={ imgPath }
          alt={ hero.superhero }
          className='img-thumbnail animate__bounceIn'
        />
      </div>

      <div className='col-8'>
        <h3>{ hero.superhero }</h3>
        <ul className='list-group'>
          <li className='list-group-item'> <b>Alter ego:</b> { hero.alter_ego } </li>
          <li className='list-group-item'> <b>Publisher:</b> { hero.publisher } </li>
          <li className='list-group-item'> <b>First Appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{ hero.characters }</p>

        <button 
          className='btn btn-outline-info'
          onClick={ handleReturn }
        >
          Return
        </button>

      </div>
        
        <p></p>
    </div>
  )
}
