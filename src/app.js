import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Title from './components/Title/Title';
import './assets/sass/main.sass';
import SignAndLog from './components/SignAndLog/SignAndLog';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { Scolor: 'black', Lcolor: 'grey' };
    this.chooseFun = this.chooseFun.bind(this);
    localStorage.setItem('fuck', this.state.Scolor);
  }


  chooseFun(e) {
    const myName = e.target.dataset.name;
    if (myName === 'sign') {
      this.setState({
        Scolor: 'black',
        Lcolor: 'grey'
      });
      localStorage.setItem('status', myName);
    } else {
      this.setState({
        Scolor: 'grey',
        Lcolor: 'black'
      });
      localStorage.setItem('status', myName);
    }
  }

  render() {
    return (
      <div><Title /><SignAndLog chooseFun={this.chooseFun} Scolor={this.state.Scolor} Lcolor={this.state.Lcolor} /></div>
    );
  }
}

ReactDom.render(<MainPage />, document.getElementById('app'));
