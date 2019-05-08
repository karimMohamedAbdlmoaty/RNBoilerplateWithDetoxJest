import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import {Routes} from './routes';
import { Provider } from 'react-redux';
import store from './src/store';
import RepoPage from './app/containers/RepoPage';


class App extends Component {
  render() {
    return (
      <Provider store={store} style={{flex: 1}} >
        {/* <Routes/> */}
        <RepoPage />
      </Provider>

    );
  }
}



AppRegistry.registerComponent(appName, () => App);