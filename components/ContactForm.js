import React from 'react';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="left contact">
      <h5 className="left">Contact Us</h5>
      <div>
        <label htmlFor="name">Name</label> <input type="text" id="name" onChange={(event) => this.setState({name: event.target.value})} />
      </div>
      <div>
        <label htmlFor="email">Email</label> <input type="text"  id="email" onChange={(event) => this.setState({email: event.target.value})} />
      </div>
      <div>
        <input type="checkbox" id="no-rat" onChange={ (event) => this.setState({leo: event.target.checked})} /> <label htmlFor="no-rat">I am not a law enforcement agent.</label>
      </div>
      <button id="contact" onClick={() => this.props.contact(this.state)}>Send</button>
    </section>
    );
  }
}

export default ContactForm;