import React from 'react';

const Game = (props) => {

return (
    <div className="ui column">
    <div className="ui card">
        <img class="image-item" alt={props.game.title} src={props.game.image + ".jpg"} onClick={(e) => {e.preventDefault(); window.location.href= props.game.url}}/>
        <h4>{props.game.title}</h4>
        <p>Developer: {props.game.developer}</p>
        <p>Publisher: {props.game.publisher}</p>
    </div>
    </div> 
  )
};

export default Game;