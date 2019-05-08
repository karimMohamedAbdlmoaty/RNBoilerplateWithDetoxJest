import React, {Component} from 'react';
import { Text,View } from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../../components/button/button.component';
import {GeneralForm} from '../../../components/general-form/general-form.component';
import {Form} from '../../../components/form/form.component';
import { styles } from './login.style';


class LoginComponent extends Component {
  render() {
    const theButtonStyles = {align:'center' };
    return (
      <View style={styles.container}>

        <Form title="Login with mail">
          <GeneralForm name={false} mail={true} password={true}/>
        </Form>

        <Button buttontestID='log-in' buttonStyles={theButtonStyles} buttonText="Login" nextScreen="Home" 
          navigation={this.props.navigation}/>
        <Button buttonStyles={theButtonStyles} buttonText="Forget password ?" nextScreen="ForgetPassword" 
          navigation={this.props.navigation}/>

        <Text>userName is:{this.props.userName}</Text>

        <Text>Login screen</Text>

      </View>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.auth.name
});
export const Login= connect(mapStateToProps)(LoginComponent);

