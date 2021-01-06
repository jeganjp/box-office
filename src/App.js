import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/info">
        <Info />
      </Route>
      <Route>
        <div>
          Not found
        </div>
      </Route>
      </Switch>
      </div>
  );
}

export default App;
