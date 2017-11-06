import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorid: 0,
      varname: '',
      colorcode: ''
    };
    this.changeVarHandler = this.changeVarHandler.bind(this);
    this.changeColorHandler = this.changeColorHandler.bind(this);
    this.createCard = this.createCard.bind(this);
  }
  changeVarHandler(e) {
    // const value = e.target.value;
    if (e.target.value.indexOf('$') !== 0) {
      this.setState({ varname: `$${e.target.value}` });
    } else {
      this.setState({ varname: e.target.value });
    }
  }
  changeColorHandler(e) {
    this.setState({ colorcode: e.target.value });
  }
  createCard() {
    const colorInfo = {
      colorid: this.state.colorid + 1,
      varname: this.state.varname,
      colorcode: this.state.colorcode
    };
    this.props.colorMsg(colorInfo);
    this.setState({ colorcode: '', varname: '' });
  }
  render() {
    return (
      <div className="textareaBox">
        <input
          type="text"
          onChange={this.changeVarHandler}
          value={this.state.varname}
        />
        <input
          type="text"
          onChange={this.changeColorHandler}
          value={this.state.colorcode}
        />
        <button onClick={this.createCard}>新增</button>
      </div>
    );
  }
}

Textarea.propTypes = {
  colorMsg: PropTypes.func.isRequired
};

export default Textarea;
