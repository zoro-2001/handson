import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';

import Games from'../Games/Games';
import SignIn from '../Signin/Signin';
import Favourite from '../Favourites/Favourite';

const Myroutes = ({ Gameslist, favourites, handleAddGame, handleRemoveGame, handleClearance }) => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={
                    <Games Gameslist={Gameslist}
                        handleAddGame={handleAddGame} />}>
                </Route>

                <Route path='/signin' exact element={<SignIn />}>
                </Route>

                <Route path='/cart' exact element={
                    <Favourite favourites={favourites}
                        handleAddGame={handleAddGame} 
                        handleRemoveGame= {handleRemoveGame}
                        handleClearance={handleClearance}
                        /> }>
                </Route>

            </Routes>
        </div>
    );
}

export default Myroutes;