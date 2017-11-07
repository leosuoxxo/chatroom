import React from 'react';
import styled from 'styled-components';

const MyTitle = styled.h1`
display:flex;
align-items:center;
justify-content:flex-start;
font-weight:900;
font-size:12vw;
letter-spacing:-0.5vw;
`;


const Title = () => (
  <MyTitle>Just Talk</MyTitle>
);

export default Title;
