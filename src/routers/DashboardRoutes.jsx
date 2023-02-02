import React from 'react';
import { Route, Routes } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { NavBar } from '../components/ui/NavBar';
import { HeroScreen } from '../components/hero/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const DashboardRoutes = () => {
  return (

    <>
        <NavBar />

        <div className='container'>
            <Routes>
                <Route path='marvel' element={ <MarvelScreen /> } />
                <Route path='dc' element={ <DcScreen /> } />
                <Route path='search' element={ <SearchScreen /> } />   
                <Route path='hero/:heroId' element={ <HeroScreen /> } />           
                <Route path='/' element={ <MarvelScreen /> } />
            </Routes>
        </div>
    </>
  )
}
