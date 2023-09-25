import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class ToDo extends React.Component {
  state = {
    list: [],
    inputValue: '',
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.state.inputValue;
    const updatedList = [...this.state.list, newItem];
    this.setState({ list: updatedList, inputValue: '' });
  };

  // Function to delete an item from the list by index
  handleDelete = (index) => {
    const updatedList = this.state.list.filter((_, i) => i !== index);
    this.setState({ list: updatedList });
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Insert a new ToDo  </label>
          <input
            type='text'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />

          <input type='submit' value='Add' className='btn btn-success'
 />
        </form>

        <div>
          <h3>Items:</h3>
          <ul>
            {this.state.list.map((item, index) => (
              <li key={index}>
                {item}
                <button className='btn btn-danger' onClick={() => this.handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDo;
