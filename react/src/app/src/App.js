import React from 'react';
import Routing from './components/route/route.js';
import './AppStyle.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Routing/>
    );
  }
}


// import React from 'react';
// import './AppStyle.css';

// const browserWindowParams = {
//   'use-content-size': true,
//   center: true,
//   show: false,
//   resizable: false,
//   'always-on-top': true,
//   'standard-window': true,
//   'auto-hide-menu-bar': true,
//   'node-integration': false
// };
// import electronGoogleOauth from 'electron-google-oauth';
// const googleOauth = electronGoogleOauth(browserWindowParams);


// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
//   }
  
//   async handleGoogleLogin() {
//     const authCode = await googleOauth.getAuthorizationCode(
//       ['https://www.google.com/m8/feeds'],
//       '71268946504-fq7d51im1i491vprd4g3cg0eppq73hb1.apps.googleusercontent.com',
//       'cE9Yp4VbLc9PrslD9VMXAPnk',
//       'https://help-me-aux-aspire-test.firebaseapp.com/__/auth/handler'
//     );
//     console.log('ssssssssssssss',authCode);
//     console.dir(authCode);
//   }

//   render() {
//     return (
//       <button
//          type="button"
//          className='loginBt'
//          onClick={this.handleGoogleLogin}>
//          Submit
//       </button>
//     );
//   }
// }