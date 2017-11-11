import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Title from './components/Title/Title';
import './assets/sass/main.sass';
import SignAndLog from './components/SignAndLog/SignAndLog';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Title />
        <SignAndLog />
      </div>
    );
  }
}

ReactDom.render(<MainPage />, document.getElementById('app'));
