import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div>
        <table id="table">
          <tr>
            <td>Hello World</td>
            <td class="close-button">X</td>
          </tr>
        </table>
      </div>
    );
  }

}

export default Table;
