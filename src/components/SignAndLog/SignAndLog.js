import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BtnBox = styled.ul`
display:flex;
width:50vw;
align-items:center;
justify-content:flex-start;
font-weight:900;
letter-spacing:-0.5vw;
transition:0.3s ease;
margin-bottom:3vh;
`;
const MyBtn = styled.li`
width:25%;
font-size:4.5vw;
display:flex;
align-items:center;
justify-content:flex-start;
cursor:pointer;
transition:0.3s ease;
font-weight:900;
letter-spacing:0.2vw;
`;

class SignAndLog extends Component {
  render() {
    return (
      <BtnBox>
        <MyBtn onClick={this.props.chooseFun} style={{ color: this.props.Lcolor }} data-name="log">登入</MyBtn>
        <MyBtn onClick={this.props.chooseFun} style={{ color: this.props.Scolor }} data-name="sign">註冊</MyBtn>
      </BtnBox>
    );
  }
}

SignAndLog.propTypes = {
  chooseFun: PropTypes.func.isRequired,
  Scolor: PropTypes.string.isRequired,
  Lcolor: PropTypes.string.isRequired
};


export default SignAndLog;
