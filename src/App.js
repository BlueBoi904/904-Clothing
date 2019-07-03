// “We have two lives, and the second begins when we realize we only have one.”
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/home.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'


function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </div>
    // Component: Component we want to render. Path: When URL is at the base '/' render homepage. 
    // Exact is a bool property. It means path must be exatly '/' for homepage to render
    // Switch will not render anything else after first path match
  );
}

export default App;

// To include sass: yarn add node-sass

// Try to keep state at the lowest possible levels to avoid rerendering pages that do not require it