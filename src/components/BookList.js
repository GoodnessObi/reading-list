import { Component } from 'react';

class BookList extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="book-list">
        <ul>
          <li>the way fo kings</li>
          <li>the name of the winds</li>
          <li>the final empire</li>
        </ul>
      </div>
     );
  }
}
 
export default BookList;