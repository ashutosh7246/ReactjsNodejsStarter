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
      isLoading: false,
      apiReaspose: false,
      message: {
        type: '',
        body: ''
      },
    }

  logout = () => {
    this.setState({isLoading:true});
    let userId = this.localStorageService.getValue('userId');
    let user = {
        userId: userId
    };
    this.sideNavService.logoutUser(user, this.logoutUserSuccess, this.logoutUserFailure);
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