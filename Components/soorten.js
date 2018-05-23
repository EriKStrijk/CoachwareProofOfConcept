
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  ImageBackground,
  Dimensions
} from 'react-native';

export default class soorten extends Component {
  constructor(props) {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.soort)
    };
  }
  render() {
    return (
        <ImageBackground style={{alignItems: 'center', width: '100%', height:'100%'}} source={require('../Assets/Images/StephenBG.jpg')}> 
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem.bind(this)}
          />
        </ImageBackground>
    );
  }
  onPress(item) {
    Actions[item.key]({data: item.data});
  }

  renderItem(item) {
    return(
    <TouchableHighlight onPress={() => this.onPress(item)} style={styles.soort}>
        <Text style={{fontFamily: 'montserrat', color: 'black', fontSize: 25}}> {item.title} </Text>
    </TouchableHighlight>
    );
  }

}
const styles = StyleSheet.create({
    soort: {
        width: Dimensions.get('window').width - (Dimensions.get('window').width  / 10),
        height: Dimensions.get('window').height / 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 40
    }
});