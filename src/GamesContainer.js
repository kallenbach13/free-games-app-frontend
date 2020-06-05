import React, {Component} from 'react';
import Search from './Search';
import GamesList from './GamesList';

class GamesContainer extends Component {

    state = {
        games: [],
        searchTerm: ""
      };
    
    componentDidMount() {
        fetch("http://localhost:3000/games")
          .then(res => res.json())
          .then(games => this.setState({ games }));
    };

    updateSearchTerm = event => {
        this.setState({ searchTerm: event.target.value })
    }

    filteredGames = () => this.state.games.filter(game => game.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    render() {
        return (
          <div className="app"> 
            <Search updateSearchTerm={this.updateSearchTerm} />
            <GamesList games={this.state.searchTerm ? this.filteredGames() : this.state.games} />
          </div>
        );
    }
}

export default GamesContainer