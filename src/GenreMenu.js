import React from 'react';

const GenreMenu = (props) => {

    let displayAllGenreCheckBoxes = () => {
      return props.genres.map(genre => <><input onChange={(e) => props.updateGenreIdsFilter(e, genre)} type="checkbox" id={genre.name} name={genre.name}/><label for={genre.name}>{genre.name}</label></>)
    }

  return (
    <div className="checkbox-field">
      <div className="row">
        <div className="col-sm-6">
          {displayAllGenreCheckBoxes()}
        </div>
      </div>
    </div>    
  );
}

export default GenreMenu;