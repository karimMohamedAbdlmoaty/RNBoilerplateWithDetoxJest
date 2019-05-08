import React from 'react';
import { View , Text  } from 'react-native';
import {Button} from '../../../components/button/button.component';
import { styles } from './landing.style';


export const Landing= ({navigation}) => {
  const theButtonStyles = {align:'center' };
  return(
    <View style={styles.container}>
    
      <Button buttontestID='to-login' buttonStyles={theButtonStyles} buttonText="Login" nextScreen="Login" navigation={navigation}/>
      
      <Button buttonStyles={theButtonStyles} buttonText="Register" nextScreen="Register" navigation={navigation}/>
      
      <Text>Landing screen</Text>

    </View>
  );
};


