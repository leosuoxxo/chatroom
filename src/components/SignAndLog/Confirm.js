import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Confirm = styled.div`
display:flex;
width:8vw;
padding:0.5vw;
font-size:2.2vw;
font-weight:900;
align-items:center;
justify-content:center;
cursor:pointer;
margin-left:34vw;
letter-spacing:0.2vw;
border-radius:5px;
&:hover {
  background:black;
  color:white
}
`;
class Confirmbutton extends Component {
  render() {
    return (
      <Confirm onClick={this.props.checkFunc}>確認</Confirm>
    );
  }
}

Confirmbutton.propTypes = {
  checkFunc: PropTypes.func.isRequired
};

export default Confirmbutton;
