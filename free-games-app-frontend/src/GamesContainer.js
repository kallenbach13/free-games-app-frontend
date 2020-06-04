import React, {Component} from 'react';
import Search from './Search';
import GamesList from './GamesList';

class NoteContainer extends Component {
    render() {
        return (
          <div className="app">
            <Search />
            <GamesList />
          </div>
        );
    }
}

export default NoteContainer