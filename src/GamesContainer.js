import React, {Component} from 'react';
import Search from './Search';
import GenreMenu from './GenreMenu';
import GamesList from './GamesList';
import StoreButtons from './StoreButtons';

class GamesContainer extends Component {

    state = {
        games: [],
        genres: [],
        filteredGenreIds: [],
        searchTerm: ""
      };
    
    componentDidMount() {
        fetch("http://localhost:3000/games")
          .then(res => res.json())
          .then(games => this.setState({ games }));
        fetch("http://localhost:3000/genres")
        .then(res => res.json())
        .then(genres => this.setState({ genres }));
    };

  //   updateGames = (e) => {
  //     if (e.target.checked) {
  //         const currentState = [...this.state.games];
  //         debugger
  //         const newState = currentState.filter(game => game.genres.includes(e.target.name));
  //         // this.setState({
  //         //     games: newState
  //         // })
  //         console.log(newState)
  //     }
  // };

  updateGenreIdsFilter = (e, genre) => {
    // if checked at then add to array
    if (e.target.checked) {
      const newArray = [...this.state.filteredGenreIds, genre.id]
      this.setState({
        filteredGenreIds: newArray
      })
    }
    // else remove from array
    else {
      const newArray = this.state.filteredGenreIds.filter(filteredGenreId => genre.id !== filteredGenreId)
      this.setState({
        filteredGenreIds: newArray
      })
    }
  }



    updateSearchTerm = event => {
        this.setState({ searchTerm: event.target.value })
    }

    filteredByGenre = (games) => {
      return games.filter(game => {
      if (this.state.filteredGenreIds.length === 0) {
        return true
      }
      else {
        const gameGenreIds = game.genres.map(g => g.id)
        return this.state.filteredGenreIds.every( genreId => gameGenreIds.includes(genreId) )
      }
    })
  }

    filteredByTitle = (games) => games.filter(game => game.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    filteredGames = () => {
      const titlesFiltered = this.filteredByTitle(this.state.games)

      return this.filteredByGenre(titlesFiltered)
    }

    render() {
        return (
          <div className="app">
            <div className="top-bar">
                <GenreMenu genres={this.state.genres} updateGenreIdsFilter={this.updateGenreIdsFilter}/>
                <Search updateSearchTerm={this.updateSearchTerm} searchTerm={this.state.searchTerm} />
                <StoreButtons/>
            </div>
            <GamesList games={this.filteredGames()} />
          </div>
        );
    }
}

export default GamesContainer