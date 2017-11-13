import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FillUl = styled.ul`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
`;
const FillLi = styled.li`
width:100%;
display:flex;
align-items:center;
justify-content:flex-start;
margin-bottom:0.5vh;
`;
const Title = styled.div`
width:auto;
display:flex;
align-items:center;
justify-content:flex-start;
font-size:2vw;
margin-right:1vw;
letter-spacing:0.5vw;
`;
const InputBox = styled.div`
width:30%;
display:flex;
align-items:center;
justify-content:flex-start;
`;
const MyInput = styled.input`
width:100%;
border:none;
background:transparent;
font-size:2vw;
padding-left:0.5vw;
&:focus {
  outline:none;
}
`;
const HintBox = styled.div`
width:30%;
color:#ff0000;
padding-left:0.5vw;
`;

class FillField extends Component {
  render() {
    return (
      <FillUl>
        <FillLi style={{ display: this.props.display }}>
          <Title>信箱:</Title>
          <InputBox><MyInput style={{ border: this.props.emailBorder }} id="myEmail" placeholder="你的信箱" /></InputBox>
          <HintBox style={{ display: this.props.email }}>信箱格式不符</HintBox>
        </FillLi>
        <FillLi>
          <Title>帳號:</Title>
          <InputBox><MyInput style={{ border: this.props.accountBorder }} id="myAccount" placeholder={this.props.placeholder} /></InputBox>
          <HintBox style={{ display: this.props.account }}>帳號不行空白</HintBox>
        </FillLi>
        <FillLi>
          <Title>密碼:</Title>
          <InputBox><MyInput style={{ border: this.props.passBorder }} id="myPassword" placeholder={this.props.password} type="password" /></InputBox>
          <HintBox style={{ display: this.props.pass }}>密碼長度不符</HintBox>
        </FillLi>
        <FillLi style={{ display: this.props.display }}>
          <Title>密碼確認:</Title>
          <InputBox><MyInput style={{ border: this.props.inputBorder }} id="secondPassword" placeholder="請重新輸入密碼" type="password" /></InputBox>
          <HintBox style={{ display: this.props.hint }}>重複密碼不符</HintBox>
        </FillLi>
      </FillUl>
    );
  }
}
FillField.propTypes = {
  display: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  inputBorder: PropTypes.string.isRequired,
  passBorder: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  emailBorder: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  accountBorder: PropTypes.string.isRequired
};

export default FillField;
