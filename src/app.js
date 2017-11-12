import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Title from './components/Title/Title';
import './assets/sass/main.sass';
// import './assets/myFont/NotoSansCJKtc-Thin_2.otf';
// import './assets/myFont/NotoSansCJKtc-Black_2.otf';
// import './assets/myFont/NotoSansCJKtc-Bold_2.otf';
// import './assets/myFont/NotoSansCJKtc-DemiLight_2.otf';
// import './assets/myFont/NotoSansCJKtc-Light_2.otf';
// import './assets/myFont/NotoSansCJKtc-Medium_2.otf';
// import './assets/myFont/NotoSansCJKtc-Regular_2.otf';
import SignAndLog from './components/SignAndLog/SignAndLog';
import FillField from './components/SignAndLog/FillArea';
import Confirmbutton from './components/SignAndLog/Confirm';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Scolor: 'grey', Lcolor: 'black', display: 'none', placeholder: '你的名稱', password: '你的密碼'
    };
    this.chooseFun = this.chooseFun.bind(this);
  }


  chooseFun(e) {
    const myName = e.target.dataset.name;
    if (myName === 'sign') {
      this.setState({
        Scolor: 'black',
        Lcolor: 'grey',
        display: 'flex',
        placeholder: '你欲顯示的名稱',
        password: '請輸入6~25字元的密碼'
      });
    } else {
      this.setState({
        Scolor: 'grey',
        Lcolor: 'black',
        display: 'none',
        placeholder: '你的名稱',
        password: '你的密碼'
      });
    }
  }

  render() {
    return (
      <div>
        <Title />
        <SignAndLog chooseFun={this.chooseFun} Scolor={this.state.Scolor} Lcolor={this.state.Lcolor} />
        <FillField display={this.state.display} placeholder={this.state.placeholder} password={this.state.password} />
        <Confirmbutton />
      </div>
    );
  }
}

ReactDom.render(<MainPage />, document.getElementById('app'));
