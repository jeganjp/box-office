import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import ShowPage from './pages/ShowPage';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <ShowPage />
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
