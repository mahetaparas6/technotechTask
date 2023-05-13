/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LogBox, StatusBar, useColorScheme, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import {BaseColor} from './app/config';
import { applyMiddleware, createStore } from "redux";
import combineReducers from "./app/redux/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(combineReducers, applyMiddleware(thunk));
const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

function App(): JSX.Element {
  return (
    <Provider store={store}>
    <View style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={BaseColor.whiteColor} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AppNavigator"
            component={AppNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </Provider>
  );
}

export default App;
