import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Indexblock = styled.div`
display:flex;
width:15vw;
padding:0.5vw;
font-size:2.2vw;
color:#bd1531;
font-weight:900;
align-items:center;
justify-content:flex-start;
letter-spacing:0.2vw;
border-radius:5px;
opacity:0;
`;
class RegSucc extends Component {
  render() {
    return (
      <Indexblock style={{ opacity: this.props.regopacity }}>{this.props.regtext}</Indexblock>
    );
  }
}

RegSucc.propTypes = {
  regopacity: PropTypes.string.isRequired,
  regtext: PropTypes.string.isRequired
};

export default RegSucc;
