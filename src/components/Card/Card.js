import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <li className="card">
        <div className="color" style={{ backgroundColor: this.props.colorcode }} />
        <div className="info">
          <span>{this.props.varname}</span>
          <span>{this.props.colorcode}</span>
        </div>
      </li>
    );
  }
}

Card.propTypes = {
  varname: PropTypes.string.isRequired,
  colorcode: PropTypes.string.isRequired
};


export default Card;
