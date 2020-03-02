import React, {Component} from 'react';
import {
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Picker,
  Alert,
  Image,
  ImageBackground,
  View,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import ListItemComp from '../components/ListItem';
// import axios from 'axios';
// import _ from 'lodash';
// import {getAllProduct} from '../redux/actions/product';
// import {connect} from 'react-redux';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
    // this.Search = _.debounce(this.Search, 10);
  }

  // ACTION ======================================================================================================================================================

  // FUNCTION ====================================================================================================================================================

  // SYSTEM ====================================================================================================================================================
  render() {
    return (
      <ImageBackground
        source={require('../../images/background.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.welcomeText}>
          <Text style={{fontSize: 32, color: values.primaryColor}}>Hello,</Text>
          <Text style={{fontSize: 24, color: values.primaryColor}}>
            Welcome to <Text style={{fontWeight: 'bold'}}>Cucikeun!</Text>
          </Text>
        </View>
        <View style={styles.welcomeButton}>
          <View style={styles.signUpButtonCont}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Regist')}>
              <View style={styles.signUpButton}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    color: values.primaryColor,
                  }}>
                  SIGN UP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signInButtonCont}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
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
          <View style={styles.forgotButtonCont}>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 16,
                  color: values.primaryColor,
                }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const values = {
  light: '#FCFCFC',
  primaryColor: '#362DAE'
}

const styles = StyleSheet.create({
  welcomeText: {
    position: 'absolute',
    marginTop: 40,
    marginLeft: 24,
    width: 250,
    height: 100,
  },
  welcomeButton: {
    position: 'absolute',
    bottom: 48,
    left: '25%',
    width: '50%',
    height: 160,
  },
  signUpButtonCont: {
    width: '100%',
    flex: 1,
  },
  signInButtonCont: {
    width: '100%',
    flex: 1,
  },
  forgotButtonCont: {
    width: '100%',
    flex: 1,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: values.primaryColor,
    width: '80%',
    height: 48,
    borderRadius: 100,
    marginLeft: '10%',
    justifyContent: 'center',
  },
  signInButton: {
    backgroundColor: values.primaryColor,
    width: '80%',
    height: 48,
    borderRadius: 100,
    marginLeft: '10%',
    marginTop: 5,
    justifyContent: 'center',
  },
});

export default Home;
