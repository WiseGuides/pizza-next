import React, { Component } from 'react';
import Layout from '../components/Layout';
import MenuItem from '../components/MenuItem';
import { withRouter } from 'next/router';
import Cart from '../components/Cart';

class Menu extends Component {

  menuItems = [
    { name: 'The Pretty Boy Floyd', description: 'Simple. Straightforward. Gets the job done. With just tomato sauce, cheese, and dough, the Pretty Boy is a great pizza for your soldiers.', price: 12.95, image: 'cheese-pizza-01.jpg' },
    { name: 'The Bugsy Siegel', description: 'A pizza deserving of the man who created Las Vegas. This pie is sure to please. With mozzarella and tomatoes decorating our signature dough and sauce, it\'s sure to be a hit.', price: 14.95, image: 'mozzarella-tomatoes.jpg' },
    { name: 'The John Dillinger', description: 'Part of our Classic series, this pie, festooned with mushrooms and olives, recalls simpler days before abominations such as ham and pineapple infiltrated our industry.', price: 13.95, image: 'mushroom-olives.jpg' },
    { name: 'The Meyer Lansky', description: 'The unusual combination of pepperoni and jalapenos makes a bold statement. Meyer would approve.', price: 14.95, image: 'pepperoni-jalapeno.jpg' },
    { name: 'The Baby Face Nelson', description: 'Baby Face wasn\'t your typical, uh, pizza shop owner — and neither is this veggie pizza. If your bullet-proof vest is getting a little snug, our veggie pizza is just what the doctor ordered.', price: 12.95, image: 'veggie.jpg' },
    { name: 'The Al Capone', description: 'For those of you who prefer Chicago-style pizza with its deepdish crust, we present the ever-popular Al Capone.', price: 16.95, image: 'deepdish-olives.jpg' },
    { name: 'The Machine Gun Kelly', description: 'Stakeouts are lonely work. Keep yourself company with our personal-sized Machine Gun Kelly.', price: 10.95, image: 'personal-pizza.jpg' },
    { name: 'The Sam Giancana', description: 'As innovative as Sam himself, our pizza rolls are sure to delight even the most-hardened guest.', price: 9.50, image: 'pizza-roles.jpg' },
    { name: 'The Peter Clemenza', description: '"Leave the gun. Take the canoli." We feel sure Clemenza would love our dessert pizza.', price: 11.50, image: 'dessert-pizza.jpg' },
    { name: 'The Thomas Gambino', description: 'A cross between a pizza and a pretzel? What\'s not to love? This one\'s for you, Don Thomas.', price: 10.75, image: 'pexel.jpg' }
  ];

  state = {
    items: []
  }

  addToCart = ({ name, quantity, price } ) => {
    if (! this.incrementIfExisting(name, quantity)) { this.newItem(price, quantity, name)}
  }

  addItem(price, quantity, pizzaName) {
    if (! this.incrementIfExisting(pizzaName, quantity)) { this.newItem(price, quantity, pizzaName)} 
    this.display();
  }

  incrementIfExisting(name, quantity) {
    let pizzas = [...this.state.items];
    let pizza = pizzas.find( item => item.name === name);
    if (pizza) {
      pizza.quantity += quantity;
      this.setState({items: pizzas});
      return true;
    }
    return false;
  }

  newItem(price, quantity, name) {
    let pizzas = [...this.state.items];
    pizzas.push({price, quantity, name});
    this.setState({items: pizzas});    
  }

  render() {
    let contents = this.menuItems.map( ({ price, name, description, image }) => {
      return <MenuItem price={price} name={name} description={description} image={image} key={name} addToCart={this.addToCart}/>
     });

    return (
      <Layout pathname={this.props.router.pathname}>
        <h2>Pizzas with Pizzaz</h2>
        <Cart items={this.state.items}/>
        {contents}
      </Layout>
    );
  }
}

export default withRouter(Menu);