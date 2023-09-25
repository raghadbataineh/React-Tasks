
import React from 'react';

class MyComponent extends React.Component {
    handleClick() {
      alert('Button clicked!');
    }
  
    render() {
      return <button onClick={this.handleClick}>Click me</button>;
    }
  }
  
  export default MyComponent;