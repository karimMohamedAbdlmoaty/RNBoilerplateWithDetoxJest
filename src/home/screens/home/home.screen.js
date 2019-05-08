import React, {Component} from 'react';
import { Text,View} from 'react-native';
import { styles } from './home.styles';


export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text testID='home-page' style={{marginTop:20}} >Home screen</Text>
      </View>
    );
  }
}
