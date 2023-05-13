import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import SignIn from '../src/SignIn';
import Splash from '../src/Splash';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </>
  );
};

export default AuthNavigator;
