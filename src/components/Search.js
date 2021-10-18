import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <label for="find-game">Find a game: </label>
        <input type="text" id="find-game"></input>
      </div>
    );
  }
}
export default Search;
