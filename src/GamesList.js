import React from 'react';
import Game from './Game';

const GameList = (props) => {

  let displayAllGames = () => {
    return props.games.map(game => <Game game={game} key={game.id} />)
  }

return (
    <div className="ui four column grid">
      <div className="row">
        <h3>Free Games</h3>
        {displayAllGames()}
      </div>
    </div>
  );
}

export default GameList;