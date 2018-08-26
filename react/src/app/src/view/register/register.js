import React from 'react';
import {RegisterService} from './registerService.js';
import {LocalStorageService} from "../../common/localStorageService.js";
import RegisterView from './registerView.js';
import * as validator from '../../common/validator.js';
import validatejs from 'validate.js';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';

// social auth //
import {loginWithGoogle} from "../../socialAuth/auth.js";
import {loginWithFacebook} from "../../socialAuth/auth.js";
import {firebaseAuth} from "../../socialAuth/authConstants.js";
const firebaseAuthKey = "firebaseAuthInProgress";
// const appTokenKey = "appToken";
// social auth //

export default class Register extends React.Component {
  constructor() {
    super();
    this.registerUser = this.registerUser.bind(this);
  }
  localStorageService = new LocalStorageService
  registerService = new RegisterService
  
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
    apiReaspose: false,
    message: {
      type: '',
      body: ''
    }
  }
  
    componentWillMount() {
        // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
        ReactGA.initialize('UA-124601541-1');
        // This just needs to be called once since we have no routes in this case.
        ReactGA.pageview('Register Page');
        if (this.localStorageService.getValue('accessToken')) {
          this.props.history.push("/");
          return;
        } else if (localStorage.getItem('userData')) {
          this.props.history.push("/otp");
          return;
        }
    }

  registerUser() {
    this.setState({isLoading:true});
    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    console.log(data);
    this.busy = this.registerService.registerUser(data, this.registerSuccess, this.registerError);
  }

  registerSuccess = (result) => {
    console.log('registerSuccess',result);
    this.setState({isLoading:false});
    if(result.success){
      this.props.history.push("/login");
      this.setState({
  apiReaspose:true,
  message: {
    type: 'Success',
    body: 'User registered'
  }});
    }else{
              this.setState({
          apiReaspose:true,
          message: {
            type: 'Error',
            body: 'Error in registering user.'
          }});
    }
  }

  registerError = (error) => {
    console.log('registerError',error);
    this.setState({isLoading:false});
    this.setState({
apiReaspose:true,
message: {
  type: 'Error',
  body: 'Error inregistering user.'
}});
  }

  goToLogin = () => {
    this.props.history.push("/login");
  }

  clearMessage = () => {
    this.setState({
      apiReaspose:false,
      message: {
        type: '',
        body: ''
      }});
  }

  render() {
      return (
      <RegisterView
      setFirstName={(firstName) => this.setState({firstName:firstName.target.value})}
      setLastName={(lastName) => this.setState({lastName:lastName.target.value})}
      setEmail={(email) => this.setState({email:email.target.value})}
      setPassword={(password) => this.setState({password:password.target.value})}
      setConfirmPassword={(confirmPassword) => this.setState({confirmPassword:confirmPassword.target.value})}
      submit={this.registerUser}
      goToLogin={this.goToLogin}
      clearMessage={this.clearMessage}
      value={this.state}/>
      );
  }
}
