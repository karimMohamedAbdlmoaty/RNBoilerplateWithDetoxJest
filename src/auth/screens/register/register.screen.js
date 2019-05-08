import React, {Component} from 'react';
import { Text,View} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import {GeneralForm} from '../../../components/general-form/general-form.component';
import {Form} from '../../../components/form/form.component';
import { styles } from './register.style';


export class RegisterComponent extends Component {
    
  render() {
    const theButtonStyles = {align:'center'};
    return (
      <View style={styles.container}>
        
        <Form title="Register with mail">
          <GeneralForm name={true} mail={true} password={true}/>
        </Form>

        <Button buttonStyles={theButtonStyles} buttonText="Register" nextScreen="" navigation={this.props.navigation}/>
        
        <Text>Register screen</Text>

        <Text>token is:{this.props.token}</Text>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});
export const Register= connect(mapStateToProps)(RegisterComponent);

