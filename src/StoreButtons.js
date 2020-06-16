import React from 'react';

const StoreButtons = (props) => {


  return (
    <div className="store-buttons">
      <button onClick={props.toggleSteamState} id="steam-button" class="btn btn-info">Steam</button>
      <button onClick={props.toggleGogState} id="gog-button" class="btn btn-info">GOG</button>
    </div>
  );
}

export default StoreButtons;