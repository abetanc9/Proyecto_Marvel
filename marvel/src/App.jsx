import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Personajes from './Personajes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/personajes" component={Personajes} />
      </Switch>
    </Router>
  );
};

export default App;
