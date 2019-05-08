import React from 'react';
import { View , Text } from 'react-native';
import {Button} from '../../../components/button/button.component';
import { styles } from './reset-password.style';


export const ResetPassword= ({navigation}) => {
  const theButtonStyles = {align:'center' };
  return(
    <View style={styles.container}>

      <Button buttonStyles={theButtonStyles} buttonText="Reset password !" nextScreen="Home" navigation={navigation}/>

      <Text>Reset-password screen</Text>

    </View>
  );
};


