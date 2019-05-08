import React from 'react';
import {View} from 'react-native';
import {Input} from '../input';
import { styles } from './general-form.style';

export const GeneralForm = ({name , mail ,password}) => {
  return (
    <View style={styles.container}>
      {name && <Input label="Full name"
        placeHolderText="Full name"
        borderBottomValue={0}
      />}

      {mail && <Input testIdValue="login-input" label="Email"
        placeHolderText= "user@domain.com"
        borderBottomValue={0}
      />}

      {password && <Input testIdValue="password-input" label="Password"
        placeHolderText=" "
        borderBottomValue={1}
      />}


    </View>
        
  );
};

