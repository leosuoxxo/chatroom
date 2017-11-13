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
      Scolor: 'grey',
      Lcolor: 'black',
      display: 'none',
      placeholder: '你的名稱',
      password: '你的密碼',
      hint: 'none',
      inputBorder: 'none',
      pass: 'none',
      passBorder: 'none',
      email: 'none',
      emailBorder: 'none',
      account: 'none',
      accountBorder: 'none'
    };
    this.chooseFun = this.chooseFun.bind(this);
    this.checkFunc = this.checkFunc.bind(this);
  }


  chooseFun(e) {
    const myName = e.target.dataset.name;
    if (myName === 'sign') {
      // 顯示註冊欄位

      this.setState({
        Scolor: 'black',
        Lcolor: 'grey',
        display: 'flex',
        placeholder: '你欲顯示的名稱',
        password: '請輸入6~25字元的密碼'
      });
    } else {
      // 顯示登入欄位

      this.setState({
        Scolor: 'grey',
        Lcolor: 'black',
        display: 'none',
        placeholder: '你的名稱',
        password: '你的密碼',
        pass: 'none',
        passBorder: 'none',
        account: 'none',
        accountBorder: 'none'
      });
    }
  }
  checkFunc() {
    const myIndex = document.getElementById('myAccount').placeholder;
    const myPassword = document.getElementById('myPassword').value;
    const secondPassword = document.getElementById('secondPassword').value;
    const emailReg = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;
    const myEmail = document.getElementById('myEmail').value;
    const myAccount = document.getElementById('myAccount').value;
    if (myIndex === '你的名稱') {
      // 登入
    } else {
      // 註冊

      // 檢查帳號格式
      if (myAccount) {
        this.setState({ account: 'none', accountBorder: 'none' });
      } else {
        this.setState({ account: 'flex', accountBorder: '1px solid #ff0000' });
      }

      // 檢查信箱格式
      if (emailReg.test(myEmail)) {
        this.setState({ email: 'none', emailBorder: 'none' });
      } else {
        this.setState({ email: 'flex', emailBorder: '1px solid #ff0000' });
      }

      // 檢查密碼格式
      if (myPassword.length >= 6 && myPassword.length <= 25) {
        this.setState({ pass: 'none', passBorder: 'none' });
      } else {
        this.setState({ pass: 'flex', passBorder: '1px solid #ff0000' });
      }

      // 檢查重複密碼格式
      if (myPassword === secondPassword) {
        this.setState({ hint: 'none', inputBorder: 'none' });
      } else {
        this.setState({ hint: 'flex', inputBorder: '1px solid #ff0000' });
      }
    }
  }

  render() {
    return (
      <div>
        <Title />
        <SignAndLog chooseFun={this.chooseFun} Scolor={this.state.Scolor} Lcolor={this.state.Lcolor} />
        <FillField display={this.state.display} placeholder={this.state.placeholder} password={this.state.password} hint={this.state.hint} inputBorder={this.state.inputBorder} pass={this.state.pass} passBorder={this.state.passBorder} email={this.state.email} emailBorder={this.state.emailBorder} account={this.state.email} accountBorder={this.state.emailBorder} />
        <Confirmbutton checkFunc={this.checkFunc} />
      </div>
    );
  }
}

ReactDom.render(<MainPage />, document.getElementById('app'));
