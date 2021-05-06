import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomeSections from './components/HomeSections';
import Footer from './components/Footer';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import InstrumentsCategories from './components/InstrumentsCategories';
import AccessoriesCategories from './components/AccessoriesCategories';
import GuitarList from './components/GuitarList';
import SignUp from './components/SignUp';
import ProductInfo from './components/ProductInfo';
import ShoppingCart from './components/ShoppingCart';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Fragment> */}
        <Navbar />
        <Route exact path='/' component={HomeSections} />
        <section>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/instrumentsCategories' component={InstrumentsCategories} />
            <Route path='/accessoriesCategories' component={AccessoriesCategories} />
            <Route path='/guitarList' component={GuitarList} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={SignUp} />
            <Route path='/product/:id' component={ProductInfo} />
            <Route path='/shoppingCart' component={ShoppingCart} />
            {/* <PrivateRoute exact path="/login" component={Dashboard} /> */}
          </Switch>
        </section>
        <Footer />
        {/* </Fragment> */}
      </Router>
    </Provider>
  );
}

export default App;
