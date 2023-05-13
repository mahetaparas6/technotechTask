import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {BaseColor} from '../config';
import MyProfile from '../src/MyProfile';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: BaseColor.whiteColor}}>
      <Stack.Navigator initialRouteName="MyProfile">
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AppNavigator;
