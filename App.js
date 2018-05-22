import React, {Component} from 'react';
import { Font, AppLoading } from 'expo';
import Loading from './Components/loading.js';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {
        Router,
        Scene
        } from 'react-native-router-flux';
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false
    };
  }

  async _cacheResourcesAsync() {

    await Font.loadAsync({
      'montserrat': require('./Assets/Montserrat-Bold.ttf'),
    });


  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
      else {
        return(
            <Router scenes={require('./tabs.js')}>
            </Router>

      );
    }
}
}
