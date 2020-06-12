import React, {Component} from 'react';
import Search from './Search';
import GenreMenu from './GenreMenu';
import GamesList from './GamesList';

class GamesContainer extends Component {

    state = {
        games: [],
        genres: [],
        filteredGenres: [],
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
      const newArray = [...this.state.filteredGenres, genre]
      this.setState({
        filteredGenres: newArray
      })
    }
    // else remove from array
    else {
      const newArray = this.state.filteredGenres.filter(filteredGenre => genre !== filteredGenre)
      this.setState({
        filteredGenres: newArray
      })
    }
  }



    updateSearchTerm = event => {
        this.setState({ searchTerm: event.target.value })
    }

    filteredByGenre = () => {
      return this.state.games.filter(game => {
      //check gamegenresids array includes any genres in filter
      if (this.state.filteredGenres.length === 0) {
        return true
      }
      else {
        //const something = game.genres.filter(genre => (genre.id === this.state.filteredGenres[0].id))
        //return something.length === 0 ? true : false
        return game.genres.some(r => this.state.filteredGenres.includes(r))
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
            <Search updateSearchTerm={this.updateSearchTerm} />
            <GenreMenu genres={this.state.genres} updateGenreIdsFilter={this.updateGenreIdsFilter}/>
            <GamesList games={this.filteredByGenre()} />
          </div>
        );
    }
}

export default GamesContainer