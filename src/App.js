// “We have two lives, and the second begins when we realize we only have one.”
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/home.component'

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);
  

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
    </div>
    // Component: Component we want to render. Path: When URL is at the base '/' render homepage. 
    // Exact is a bool property. It means path must be exatly '/' for homepage to render
    //Switch will not render anything else after first path match
  );
}

export default App;

// To include sass: yarn add node-sass