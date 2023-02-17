import React from 'react';
import data from './components/back/Data/Data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/front/Header/Header'
import Myroutes from './components/front/Routes/Routes'


function App() {
  const { Gameslist } = data;
  const [favourites, setfavourites] = useState([]);

  const handleAddGame = (Game) => {
    const GameExist = favourites.find((GameItem) => GameItem.id === Game.id);

    if (GameExist) {
      setfavourites(
        favourites.map((GameItem) =>
          GameItem.id === Game.id
            ? { ...GameExist, quantity: GameExist.quantity + 1 } : GameItem)
      );
    }
    else {
      setfavourites([...favourites, { ...Game, quantity: 1 }]);
    }
  }

  const handleRemoveGame = (Game) => {
    const GameExist = favourites.find((GameItem) => GameItem.id === Game.id);

    if (GameExist.quantity === 1) {
      setfavourites(favourites.filter((GameItem) => GameItem.id !== Game.id));
    }
    else {
      setfavourites(
      favourites.map((GameItem) =>
        GameItem.id === Game.id
          ? { ...GameExist, quantity: GameExist.quantity - 1 } : GameItem)
      );
    }
  }

  const handleClearance = ()=> {
    setfavourites([]);
  }

  return (
    <div className="App">
     
       <Header/>
       <Myroutes Gameslist={Gameslist} favourites={favourites}
          handleAddGame={handleAddGame}
          handleRemoveGame={handleRemoveGame}
          handleClearance={handleClearance}
        />
   
    </div>
  );
}

export default App;
