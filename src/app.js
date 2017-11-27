import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Title from './components/Title/Title';
import './assets/sass/main.sass';
import SignAndLog from './components/SignAndLog/SignAndLog';
import FillField from './components/SignAndLog/FillArea';
import Confirmbutton from './components/SignAndLog/Confirm';
import RegSucc from './components/RegSucc/RegSucc';


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
      accountBorder: 'none',
      regopacity: '0',
      regtext: ''
    };
    this.chooseFun = this.chooseFun.bind(this);
    this.checkFunc = this.checkFunc.bind(this);
    this.registerFunc = this.registerFunc.bind(this);
    this.keyCheck = this.keyCheck.bind(this);
  }

  componentDidMount() {
    document.onkeypress = this.keyCheck;
  }


  chooseFun(e) {
    const myName = e.target.dataset.name;
    if (myName === 'sign') {
      // 顯示註冊欄位

      this.clearFunc();
      this.setState({
        Scolor: 'black',
        Lcolor: 'grey',
        display: 'flex',
        placeholder: '你欲顯示的名稱',
        password: '請輸入6~25字元的密碼'
      });
    } else {
      // 顯示登入欄位

      this.clearFunc();
      this.setState({
        Scolor: 'grey',
        Lcolor: 'black',
        display: 'none',
        placeholder: '你的名稱',
        password: '你的密碼',
        pass: 'none',
        passBorder: 'none',
        account: 'none',
        accountBorder: 'none',
        email: 'none',
        emailBorder: 'none',
        hint: 'none',
        inputBorder: 'none',
        regopacity: '0'
      });
    }
  }
  checkFunc() {
    const checkStorage = [];
    const myIndex = document.getElementById('myAccount').placeholder;
    const myPassword = document.getElementById('myPassword').value;
    const secondPassword = document.getElementById('secondPassword').value;
    const emailReg = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;
    const myEmail = document.getElementById('myEmail').value;
    const myAccount = document.getElementById('myAccount').value;
    if (myIndex === '你的名稱') {
      // 登入

      // 檢查帳號格式
      if (myAccount) {
        this.setState({ account: 'none', accountBorder: 'none' });
        checkStorage.push(true);
      } else {
        this.setState({ account: 'flex', accountBorder: '1px solid #ff0000' });
      }

      // 檢查密碼格式
      if (myPassword.length >= 6 && myPassword.length <= 25) {
        this.setState({ pass: 'none', passBorder: 'none' });
        checkStorage.push(true);
      } else {
        this.setState({ pass: 'flex', passBorder: '1px solid #ff0000' });
      }

      // 決定
      if (checkStorage.length === 2) {
        this.loginFunc();
      }
    } else {
      // 註冊

      // 檢查帳號格式
      if (myAccount) {
        this.setState({ account: 'none', accountBorder: 'none' });
        checkStorage.push(true);
      } else {
        this.setState({ account: 'flex', accountBorder: '1px solid #ff0000' });
      }

      // 檢查信箱格式
      if (emailReg.test(myEmail)) {
        this.setState({ email: 'none', emailBorder: 'none' });
        checkStorage.push(true);
      } else {
        this.setState({ email: 'flex', emailBorder: '1px solid #ff0000' });
      }

      // 檢查密碼格式
      if (myPassword.length >= 6 && myPassword.length <= 25) {
        this.setState({ pass: 'none', passBorder: 'none' });
        checkStorage.push(true);
      } else {
        this.setState({ pass: 'flex', passBorder: '1px solid #ff0000' });
      }

      // 檢查重複密碼格式
      if (myPassword === secondPassword) {
        this.setState({ hint: 'none', inputBorder: 'none' });
        checkStorage.push(true);
      } else {
        this.setState({ hint: 'flex', inputBorder: '1px solid #ff0000' });
      }

      // 決定
      if (checkStorage.length === 4) {
        this.registerFunc();
      }
    }
  }
  clearFunc() {
    document.getElementById('myPassword').value = '';
    document.getElementById('myAccount').value = '';
    document.getElementById('secondPassword').value = '';
    document.getElementById('myEmail').value = '';
  }
  registerFunc() {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/register',
      datatype: 'json',
      data: {
        account: document.getElementById('myEmail').value,
        password: document.getElementById('myPassword').value,
        nickname: document.getElementById('myAccount').value
      }
    }).then((response) => {
      if (response.data.ok) {
        this.setState({ regopacity: '1', regtext: response.data.msg });
        this.clearFunc();
      } else {
        this.setState({ regopacity: '1', regtext: response.data.msg });
      }
    });
  }
  loginFunc() {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/login',
      datatype: 'json',
      data: {
        account: document.getElementById('myEmail').value,
        password: document.getElementById('myPassword').value
      }
    }).then((response) => {
      if (response.data.ok) {
        console.log('登入成功');
      }
    });
  }
  keyCheck(e) {
    if (e.which === 13) {
      this.checkFunc();
    }
  }

  render() {
    return (
      <div>
        <Title />
        <SignAndLog chooseFun={this.chooseFun} Scolor={this.state.Scolor} Lcolor={this.state.Lcolor} />
        <FillField display={this.state.display} placeholder={this.state.placeholder} password={this.state.password} hint={this.state.hint} inputBorder={this.state.inputBorder} pass={this.state.pass} passBorder={this.state.passBorder} email={this.state.email} emailBorder={this.state.emailBorder} account={this.state.account} accountBorder={this.state.accountBorder} />
        <Confirmbutton checkFunc={this.checkFunc} />
        <RegSucc regopacity={this.state.regopacity} regtext={this.state.regtext} />
      </div>
    );
  }
}

ReactDom.render(<MainPage />, document.getElementById('app'));
