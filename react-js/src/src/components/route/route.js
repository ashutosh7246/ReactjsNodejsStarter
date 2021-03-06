import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import {
    HashRouter,
    Switch,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';
import Header from '../../view/header/header.js';
import Home from '../../view/Home/home.js';
import SideNav from '../../view/sidenav/sidenav.js';
import Overlay from '../../view/overlay/overlay.js';
import Footer from '../../view/footer/footer.js';
import Login from '../../view/Login/login.js';
import Register from '../../view/register/register.js';
import ForgotPassword from '../../view/forgotPassword/forgotPassword';
import ChangePassword from '../../view/changePassword/changePassword.js';
import OTP from '../../view/otp/otp.js';
import NoConnection from '../../view/noConnection/noConnection.js';
import {IsLoggedIn} from "../../common/isLoggedIn.js";
import {AuthGuardService} from "../../common/authGuardService.js";
// import { Offline, Online } from 'react-detect-offline';
import { Offline, Online } from '../../connect.js';
// import { check, watch } from 'is-offline';
// import isOnline from 'is-online';

const SecureRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => 
        (authGuard() ? 
            (
                <div className="mainContainer">
                <Online>
                <Header/>
                { authGuard() ? <SideNav {...props}/> : null }
                { authGuard() ? <Overlay/> : null }
                <Component {...props}/>
                <Footer/>
                </Online>
                <Offline><NotFound/></Offline>
                </div>
            ) 
            : 
            (
            <Redirect to={{pathname: '/login',state: { from: props.location }}}/>
            )
        )}/>
)
const LoggedIn = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !authGuard() ? (
                <div className="mainContainer">
                <Online>
                <Header/>
                { authGuard() ? <SideNav {...props}/> : null }
                { authGuard() ? <Overlay/> : null }
                <Component {...props}/>
                <Footer/>
                </Online>
                <Offline><NotFound/></Offline>
                </div>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    )}/>
)
const authGuard = () => {
    var authGuardService = new AuthGuardService
    let res = authGuardService.canActivate();
    return res;
}

class NotFound extends Component {
    render() {
      return (
      <div style={styles.notFoundCon}>
        <Link style={styles.notFoundLink} to="/">Page not found.....click to continue</Link>
      </div>
      )
    }
}

var styles = {
    notFoundCon: {
        height: '100%',
        background: 'rgb(44, 62, 80)'
    },
    notFoundLink: {
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

export default class Routing extends Component {
    constructor() {
      super();
    }

   render() {
    console.log('authGuard1');
      return (
        <HashRouter>
            <Switch>
                <SecureRoute 
                    exact
                    path="/" 
                    component={Home}/>

                    <SecureRoute 
                        exact
                        path="/change-password" 
                        component={ChangePassword}/>

                <LoggedIn 
                    exact
                    path="/login" 
                    component={Login}/>

                <LoggedIn 
                    exact
                    path="/otp" 
                    component={OTP}/>

                    <LoggedIn 
                        exact
                        path="/register" 
                        component={Register}/>

                        <LoggedIn 
                            exact
                            path="/forgot-password" 
                            component={ForgotPassword}/>
                
                <Route path='/notfound' component={NotFound}/>

                <Redirect to="/"/>
            </Switch>
        </HashRouter>
      );
   }
}