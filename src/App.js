// “We have two lives, and the second begins when we realize we only have one.”
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/home.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx'
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

//Hello
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
      </Switch>
      </div>
      // Component: Component we want to render. Path: When URL is at the base '/' render homepage. 
      // Exact is a bool property. It means path must be exatly '/' for homepage to render
      // Switch will not render anything else after first path match
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  // Dispatch is a way for redux to know that whatever obj your are passing me
  //is going to be a action object that's going to be passed to every reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

// To include sass: yarn add node-sass

// Try to keep state at the lowest possible levels to avoid rerendering pages that do not require it