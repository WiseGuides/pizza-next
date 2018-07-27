import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {

  render() {
    return (
      <Fragment>
        <Header pathname={this.props.pathname}/>
        <main>
          {this.props.children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default Layout;