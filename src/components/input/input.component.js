import React from 'react';
import {Text, View,TextInput} from 'react-native';
import {styles} from './input.style';

export const Input =({ titleText,label,placeHolderText,borderBottomValue ,testIdValue }) => {
  return(
    <View style={[styles.container,{borderBottomWidth:borderBottomValue}]}>
      <View style={styles.field}>
        <View style={styles.fieldLabel}>
          <Text> {label}</Text>
        </View>
        <View style={styles.fieldInput}>
          <TextInput testID={testIdValue} style={styles.fieldInputBody} placeholder = {placeHolderText} />
        </View>
      </View>
    </View>
  );
};


