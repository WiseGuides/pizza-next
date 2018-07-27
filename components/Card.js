import React, { Fragment } from 'react';
import Parser from 'html-react-parser';

class Card extends React.Component {

  render() {
    // assume left position
    let Contents = ({ img, children, position }) => {
      return (
        <Fragment>
          {position === 'right' ? children : null}
          <img src={`static/images/${img}`} width="320" />
          {position === 'left' ? children : null}
        </Fragment>
      );
    }

    return (
      <React.Fragment>
        <section className="card">
          <div className="lowdown">
            <Contents img={this.props.imageUrl} children={this.props.children} position={this.props.position} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;