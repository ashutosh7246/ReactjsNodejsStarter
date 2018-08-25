import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './app/src/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import { AppRegistry } from 'react-native';
// import App from './src/App';

// AppRegistry.registerComponent('App', () => App);
// AppRegistry.runApplication('App', {
//   rootTag: document.getElementById('react-root')
// });