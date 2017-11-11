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
transition:0.3s ease;
`;

class SignAndLog extends Component {
  constructor(props) {
    super(props);
    this.state = { Scolor: 'black', Lcolor: 'grey' };
    this.chooseFun = this.chooseFun.bind(this);
  }


  chooseFun(e) {
    const myName = e.target.dataset.name;
    if (myName === 'sign') {
      this.setState({
        Scolor: 'black',
        Lcolor: 'grey'
      });
    } else {
      this.setState({
        Scolor: 'grey',
        Lcolor: 'black'
      });
    }
  }
  render() {
    return (
      <BtnBox>
        <MyBtn onClick={this.chooseFun} style={{ color: this.state.Scolor }} data-name="sign">註冊</MyBtn>
        <MyBtn onClick={this.chooseFun} style={{ color: this.state.Lcolor }} data-name="log">登入</MyBtn>
      </BtnBox>
    );
  }
}


export default SignAndLog;
