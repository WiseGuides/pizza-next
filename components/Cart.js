import React, { Component } from 'react';

class Cart extends Component {

  total(items) {
    let sum = 0;
    items.forEach( (item) => {
      sum += item.price * item.quantity;
    });
    return sum.toFixed(2);
  }

  render() {
    let contents = this.props.items.map( (item) => {
      return <React.Fragment key={item.name}>{item.quantity}ea. {item.name}<br /></React.Fragment>
    });

    return(
      <div id="cart">
        <h3>Your Cart</h3>
        {contents}
        <h3>Total: {this.total(this.props.items)}</h3>
      </div>
    );
  }
}

export default Cart;