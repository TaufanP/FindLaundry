import React from 'react';
import {Text} from 'react-native';
import Home from '../../screens/buyer/Home';
import Login from '../../screens/buyer/Login';
import Regist from '../../screens/buyer/Regist';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainNavigators = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName = 'Home' headerMode = "none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Regist" component={Regist} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainNavigators;
