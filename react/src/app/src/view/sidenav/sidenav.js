import React from 'react';
import SideNavView from './sideNavView.js';
import {LocalStorageService} from "../../common/localStorageService.js";
import {SideNavService} from './sidenavService.js';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
    localStorageService = new LocalStorageService
    sideNavService = new SideNavService
    
    state = {
      email: '',
      firstName: '',
      userPhotoURL: '',
      isLoading: false,
      apiReaspose: false,
      message: {
        type: '',
        body: ''
      },
    }

    
  
    componentWillMount() {
      let email = this.localStorageService.getValue('email');
      let firstName = this.localStorageService.getValue('firstName');
      let userPhotoURL = this.localStorageService.getValue('userPhotoURL');
      
      if(email){
        this.setState({email:email});
      }else{
        this.setState({email:'react@react.react'});
      }
      if(firstName){
        this.setState({firstName:firstName});
      }else{
        this.setState({firstName:'React'});
      }
      if(userPhotoURL){
        this.setState({userPhotoURL:userPhotoURL});
      }else{
        this.setState({userPhotoURL:'https://cdn-images-1.medium.com/max/1600/1*ypTuZbQNEV1oGkAfn85AUA.png'});
      }
    }

  logout = () => {
    let loginBy = localStorage.getItem('loginBy') || this.localStorageService.getValue('loginType');
    console.log('------------------------>',loginBy);
    if(loginBy){
      localStorage.clear();
      this.props.history.push('/login');
    }else{
      this.setState({isLoading:true});
      let userId = this.localStorageService.getValue('userId');
      let user = {
          userId: userId
      };
      this.sideNavService.logoutUser(user, this.logoutUserSuccess, this.logoutUserFailure);
    }
  }
  
    logoutUserSuccess = (result) => {
      console.log('logout success',result);
      this.localStorageService.clearLocalStorage();
      console.log(this.props);
      this.setState({isLoading:false});
      this.props.history.push('/login');
    }
  
    logoutUserFailure = (error) => {
      this.setState({isLoading:false});
      console.log('logout error',error);
      this.setState({
        apiReaspose:true,
        message: {
          type: 'Error',
          body: 'Error in logging out'
        }});
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
    <SideNavView
    value={this.state}
    clearMessage={this.clearMessage}
    logout={this.logout}/>
    );
  }
}