import React from 'react';
import styled from 'styled-components';

const MyTitle = styled.h1`
display:flex;
align-items:center;
justify-content:flex-start;
font-weight:900;
font-size:10vw;
letter-spacing:-0.5vw;
line-height:1.3em;
`;


const Title = () => (
  <MyTitle>Just Talk</MyTitle>
);

export default Title;
