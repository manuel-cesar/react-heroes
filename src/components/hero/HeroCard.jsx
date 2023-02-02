import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ hero }) => {

    const imgPath = `/assets/heroes/${hero.id}.jpg`;
    return (
        <div className='col'>
            <div className='card'>
                
                <div className='row no-gutters'>
                    <div className='col-5'>
                        <img src={ imgPath } className='card-img animate__flipInX' alt={ hero.superhero }/>
                    </div>
                    <div className='col-7'>
                        <h5 className='card-title'>{ hero.superhero }</h5>
                        <p className='card-text'>{ hero.alter_ego }</p>

                        {
                            ( hero.alter_ego !== hero.characters) && 
                                <p className='text-muted'>{ hero.characters }</p>
                        }

                        <p className='card-text'>
                            <small className='text-muted'>{ hero.first_appearance }</small>
                        </p>

                        <Link to={`/hero/${hero.id}`} >
                            Mas info
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}
