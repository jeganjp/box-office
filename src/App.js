import React from 'react';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is homepage
      </Route>
      <Route exact path="/info">
        this is info page
      </Route>
      <Route exact path="/info/cu">
        this is our contact us page
      </Route>
      <Route>
        Error 404!
      </Route>
      </Switch>
  );
}

export default App;
