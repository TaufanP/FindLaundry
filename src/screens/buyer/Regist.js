import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  ImageBackground,
  CheckBox,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class Regist extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      image: null,
      name: '',
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
      address: '',
      msg: ''
    };
  }

  chooseImage = () => {
    const options = {
      // title: 'Select Avatar',
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      // else if (response.customButton) {
      //   console.log('User tapped custom button: ', response.customButton);
      // }
      else {
        const source = response.uri;

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          image: source,
          fileImage: response,
        });
      }
    });
  };

  iterateRegex = () => {
    // Alert.alert(
    //   'Error',
    //   this.state.formData[0].length,
    //   [{text: 'GOT IT'},{text: 'TEU'}],
    //   {cancelable: true},
    // );
    const {name, username, password, email, phoneNumber} = this.state
    const nameRegex = /[0-9]/;
    const usernameRegex = /\s/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /08\d/;
    if(nameRegex.test(name)){
      this.setState({msg: 'Name only contains Alphabet!'})
    }
    else if(usernameRegex.test(username)){
      this.setState({msg: 'Username cannot contain space!'})
    }
    else if(password.length !== 0 && (password.length < 8 || password.length > 12)){
      this.setState({msg: 'Password length is 8 - 12 characters!'})
    }
    else if(email !== '' && !emailRegex.test(email)){
      this.setState({msg: 'Please enter an valid email!'})
    }
    else if(phoneNumber !== '' && !phoneRegex.test(phoneNumber)){
      this.setState({msg: 'Phone number format is 08xxxxxxxxxx'})
    }
    else{this.setState({msg: ''})}
  }

  regexTest = key => {
    const {name, username, password, email, phoneNumber} = this.state;
    switch (key) {
      case 'completeName':
        const nameRegex = /[0-9]/;
        if (nameRegex.test(name)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'username':
        const usernameRegex = /\s/;
        if (usernameRegex.test(username)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
      case 'password':
        if (password.length !== 0 && (password.length < 8 || password.length > 12)) {
          return [styles.textInput, styles.regexCatch];
        } else {
          return [styles.textInput];
        }
        case 'email':
          const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (email !== '' && !emailRegex.test(email)) {
            return [styles.textInput, styles.regexCatch];
          } else {
            return [styles.textInput];
          }
        case 'phoneNumber':
          const phoneRegex = /08\d/;
          if (phoneNumber !== '' && !phoneRegex.test(phoneNumber)) {
            return [styles.textInput, styles.regexCatch];
          } else {
            return [styles.textInput];
          }
      default:
        null;
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../images/backgroundWoIll.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={{fontSize: 32, color: values.primaryColor}}>
              Let's
            </Text>
            <Text style={{fontSize: 24, color: values.primaryColor}}>
              create your account!
            </Text>
          </View>
          <View style={styles.lilContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={this.regexTest('completeName')}
                placeholder="Complete Name"
                onChangeText={name => this.setState({name})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={this.regexTest('username')}
                placeholder="Username"
                onChangeText={username => this.setState({username})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry={true}
                style={this.regexTest('password')}
                placeholder="Password"
                onChangeText={password => this.setState({password})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={this.regexTest('email')}
                placeholder="Email"
                keyboardType={'email-address'}
                onChangeText={email => this.setState({email})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={this.regexTest('phoneNumber')}
                placeholder="Phone Number"
                keyboardType={'number-pad'}
                onChangeText={phoneNumber => this.setState({phoneNumber})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.textInput} placeholder="Address" />
            </View>
            <View style = {{alignItems: 'center', marginTop: 8}}>
              <Text style = {{color:values.fail}}>{this.state.msg}</Text>
            </View>
            {/* <View style={styles.wrapper}>
              <View style={styles.pictCont}>
                <TouchableOpacity
                  onPress={() => {
                    this.chooseImage();
                  }}>
                  <View style={styles.pictureButton}></View>
                </TouchableOpacity>
              </View>
              <View style={styles.genBirthCont}>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.textInput} placeholder="Gender" />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Birth: MM/DD/YYYY"
                  />
                </View>
              </View>
            </View> */}
            <View style={styles.signInButtonCont}>
              <TouchableOpacity onPress={() => this.iterateRegex()}>
                <View style={styles.signInButton}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: values.light,
                    }}>
                    SIGN UP
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.miscOption}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 24,
                    color: values.primaryColor,
                  }}>
                  Already have an account?
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
  alertButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 32,
    height: 32,
    right: 16,
  },
  regexCatch: {
    borderColor: values.fail,
    borderWidth: 1,
  },
  pictureButton: {
    backgroundColor: values.form,
    borderRadius: 8,
    width: '90%',
    height: '96%',
  },
  genBirthCont: {
    flex: 1.75,
  },
  pictCont: {
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    backgroundColor: values.form,
    color: '#333',
    borderRadius: 4,
    fontSize: 16,
    width: '100%',
    height: '90%',
  },
  welcomeText: {
    position: 'relative',
    marginBottom: 0,
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
    height: 450,
    marginBottom: 40,
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  miscOption: {
    flex: 0.5,
    width: '100%',
  },
  miscOptionCheck: {
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
    marginTop: 32,
    justifyContent: 'center',
  },
  signInButtonCont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    flex: 2,
  },
});

export default Regist;
