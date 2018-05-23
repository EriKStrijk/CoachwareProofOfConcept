
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
  View
} from 'react-native';
import soundHandler from '../Sound/SoundHandler.js';
export default class soortComponent extends Component {
    constructor(props) {
      super();

      this.soundH = new soundHandler(props.data);

      this.state = {
        textButton: "START WORKOUT",
        isRunning: false
      };
    }
    render() {

    return (
      <ImageBackground style={{alignItems: 'center', width: '100%', height:'100%'}} source={require('../Assets/Images/StephenBG.jpg')}> 
        <TouchableHighlight style={styles.footer} onPress={this.onPress.bind(this)}>
          <Text style={{fontFamily: 'montserrat', color: 'white', fontSize: 25}}> {this.state.textButton} </Text>
        </TouchableHighlight>
    </ImageBackground>
    );
  }
  componentWillUnmount() {
    this.soundH.stopDestroy();
  }
  onPress() {
    if(this.state.isRunning) {
      this.soundH.stop();
      this.setState({
        isRunning: false,
        textButton: "CONTINUE WORKOUT"
      });
    } else {
      this.soundH.play();
      this.setState({
        isRunning: true,
        textButton: "STOP WORKOUT"
      });
      this.state.isRunning = true;
      this.state.textButton = "STOP WORKOUT";
    }
  }

}
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 8,
    backgroundColor: '#1e90ff'
  },

});