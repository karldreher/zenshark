import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <label for="find-game">Find a game: </label>
        <input type="text" id="find-game"></input>
        <button>Add to List</button>
      </div>
    );
  }

}
export default Search;
