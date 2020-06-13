import React from 'react';

const Game = (props) => {

return (
    <div className="col-sm-3">
        <div className="game-card" onClick={()=> window.open(props.game.url, "_blank")}>
        <img class="image-item" alt={props.game.title} src={props.game.image + ".jpg"}/>
        <h5>{props.game.title}</h5>
        <p>Developer: {props.game.developer}</p>
        <p>Publisher: {props.game.publisher}</p>
        </div>
    </div>
  )
};

export default Game;