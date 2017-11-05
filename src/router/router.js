import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Home from 'containers/Home/Home';
import Colorlist from 'containers/Colorlist/Colorlist';


const getRouter = () => (
  <Router>
    <div id="allContainer">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/colorlist">colorlist</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/colorlist" component={Colorlist} />
      </Switch>
    </div>
  </Router>
);


export default getRouter;
