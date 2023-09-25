import React from 'react';

class Product extends React.Component {
    render() {
      return (
        <div>
          <h2>{this.props.name}</h2>
          <p>Price: ${this.props.price}</p>
        </div>
      );
    }
  }


export default Product;