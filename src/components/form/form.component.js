import React from 'react';
import { Text, View} from 'react-native';
import { styles } from './form.style';


export const Form = ({children,title}) => {
  return (
    <View>
      <View style={styles.titleText}>
        <Text>{title}</Text>
      </View>
      {children}
    </View>
  );
};