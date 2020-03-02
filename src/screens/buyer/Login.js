import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  ImageBackground,
  CheckBox
} from 'react-native';
// import {CheckBox} from '@react-native-community/checkbox';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../../images/backgroundWoIll.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={{fontSize: 32, color: values.primaryColor}}>
              Hello,
            </Text>
            <Text style={{fontSize: 24, color: values.primaryColor}}>
              Welcome back!
            </Text>
          </View>
          <View style={styles.lilContainer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} placeholder="Username" />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                placeholder="Password"
              />
            </View>
            <View style={styles.miscOptionCheck}>
              <CheckBox
                style={{marginLeft: 8}}
                value={this.state.checked}
                onValueChange={() =>
                  this.setState({checked: !this.state.checked})
                }
              />
              <View style={{marginTop: 8}}>
                <Text style={{fontSize: 12}}>Remember me</Text>
              </View>
            </View>
            <View style={styles.signInButtonCont}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <View style={styles.signInButton}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: values.light,
                    }}>
                    SIGN IN
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.miscOption}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Regist')}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 16,
                    color: values.primaryColor,
                  }}>
                  Does not have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const values = {
  light: '#FCFCFC',
  primaryColor: '#362DAE',
  form: '#FFF',
  success: '#48C888',
  fail: '#F54444',
  accent: '#E0EF0F',
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: values.form,
    color: '#333',
    borderRadius: 4,
    fontSize: 16,
    width: '90%',
    height: '80%',
  },
  welcomeText: {
    position: 'relative',
    marginBottom: 64,
    width: 250,
    height: 100,
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lilContainer: {
    // backgroundColor: 'orange',
    width: '70%',
    height: 216,
    marginBottom: 128,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  miscOption: {
    flex: 0.5,
    width: '100%',
  },
  miscOptionCheck: {
    // backgroundColor: 'blue',
    marginTop: -8,
    flexDirection: 'row',
    flex: 0.5,
    width: '100%',
  },
  signInButton: {
    backgroundColor: values.primaryColor,
    minWidth: 208,
    height: 44,
    borderRadius: 100,
    marginTop: 24,
    justifyContent: 'center',
  },
  signInButtonCont: {
    // backgroundColor: 'purple',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Login;
