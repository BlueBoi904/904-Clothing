// “We have two lives, and the second begins when we realize we only have one.”
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/home.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }

   unsubscribeFromAuth = null

  // We don't want to remount our app in order to update
  // Firebase keeps track that the current user is signed in even if a page refresh happens
  // This is an open subscription which we must close when the user logs out to prvent memory leaks
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
      });
    }

    this.setState({ currentUser: userAuth });
  });
}

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
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
}

export default App;

// To include sass: yarn add node-sass

// Try to keep state at the lowest possible levels to avoid rerendering pages that do not require it