import React, { Component } from 'react';
import styled from 'styled-components';

const BtnBox = styled.ul`
display:flex;
width:50vw;
align-items:center;
justify-content:flex-start;
font-weight:900;
font-size:5vw;
letter-spacing:-0.5vw;
`;
const MyBtn = styled.li`
width:30%;
font-size:5vw;
display:flex;
align-items:center;
justify-content:flex-start;
cursor:pointer;
`;

class SignAndLog extends Component {
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
      <BtnBox>
        <MyBtn onClick={this.chooseFun} data-name="sign" style={{ color: this.state.Scolor }}>註冊</MyBtn>
        <MyBtn onClick={this.chooseFun} data-name="log" style={{ color: this.state.Lcolor }}>登入</MyBtn>
      </BtnBox>
    );
  }
}


export default SignAndLog;
