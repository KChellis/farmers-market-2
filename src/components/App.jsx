import React from 'react';
import Header from './Header';
import Week from './Week';
import Year from './Year';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Week} />
        <Route path='/selection' component={Year} />
      </Switch>
    </div>
  );
}

export default App;
