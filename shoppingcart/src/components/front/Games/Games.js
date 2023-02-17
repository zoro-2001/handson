import React from 'react';
import './Games.css'

const Games = ({ Gameslist, handleAddGame }) => {
    return (
        <div className="Games">
            {Gameslist.map((Games) => (
                <div className='card'>
                    <div>
                        <img className='Game-image'
                            src={Games.image}
                            alt={Games.name} />
                    </div>
                    <div>
                        <h3 className='Game-name'>{Games.name}</h3>
                    </div>
                    <div>
                        <h3 className='Game-price'>Price :{Games.Price}</h3>
                    </div>
                    <div>
                        <button className='Game-add-button' onClick={() => handleAddGame(Games)}> Add to Favourite</button>
                    </div>
                    <div>
                <a href={Games.link} target="_blank">
                     <button className="btnStyle"> Buy Now </button>
                </a>
                </div>
                </div>
            ))}
        </div>
    );
}

export default Games;