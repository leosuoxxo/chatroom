import React from 'react';
import ReactDom from 'react-dom';
import MainPage from './containers/SignAndLog/Main';
import './assets/sass/main.sass';


const MyPage = () => (
  <div><MainPage /></div>
);


ReactDom.render(<MyPage />, document.getElementById('app'));
