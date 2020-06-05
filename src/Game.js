import React from 'react';

const Game = (props) => {

return (
    <div className="ui column">
    <div className="ui card">
        <img alt="title of game here" src="cover art url here"/>
        <h4>{props.game.title}</h4>
        <p>Genre: Genre Here</p>
        <p>{props.game.developer}</p>
        <p>{props.game.publisher}</p>
        <p>Released: Release Year Here</p>
    </div>
    </div> 
  )
};

export default Game;