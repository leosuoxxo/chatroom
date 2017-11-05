import React, { Component } from 'react';

import style from './home.css';
import './test.sass';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  _handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        this is home<br />
        現在數量123：{this.state.count}<br />
        <button className={style.btn} onClick={() => this._handleClick()}>增加</button>
      </div>
    );
  }
}
