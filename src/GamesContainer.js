import React, {Component} from 'react';
import Search from './Search';
import GamesList from './GamesList';

class GamesContainer extends Component {

    state = {
        games: [],
        searchTerm: null
      };
    
      componentDidMount() {
        fetch("https://embed.gog.com/games/ajax/filtered?price=free&hide=dlc")
          .then(res => res.json())
          .then(games => {
              debugger;
              this.setState({ games })
            });
      };


    render() {
        return (
          <div className="app"> 
            <Search />
            <GamesList games={this.state.games} />
          </div>
        );
    }
}

export default GamesContainer