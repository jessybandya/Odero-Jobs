import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
