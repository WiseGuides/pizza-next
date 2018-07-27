import React from 'react';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      price: props.price,
      quantity: 1
    }
  }

  render() {
    let { price, name, description, image, addToCart } = this.props;
    return (
      <React.Fragment>
        <section className="card">
          <div>
            <img src={`static/images/${image}`} width="250" />
          </div>
          <div>
            <h5>{name}</h5>
            <p className="left">{description}</p>
            <button onClick={() => addToCart(this.state)}>Add</button>
            <input type="number" min="1" className="number" value={this.state.quantity} onChange={(event) => {this.setState({quantity: parseInt(event.target.value) })}} />
            <span className="pricetag">{price}</span>
          </div>
        </section>
        <hr />
      </React.Fragment>
    );
  }
}

export default MenuItem;