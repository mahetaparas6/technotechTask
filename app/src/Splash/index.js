import React, {useEffect, useState} from 'react';
import {View, StatusBar, Image} from 'react-native';
import { Images} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    const setData = async () => {
      var isLogin = await AsyncStorage.getItem('isLogin');
      try {
        setTimeout(
          function () {
            if (isLogin == 'true') {
              navigation.replace('AppNavigator');
            } else {
              navigation.replace('SignIn');
            }
          }.bind(this),
          3000,
        );
      } catch (e) {
        alert(e);
      }
    };
    setData();
  }, []);

  return (
    <View
      style={styles.mainContainer}>
      <StatusBar hidden />

      <Image resizeMode="contain" source={Images.app_logo}></Image>
    </View>
  );
};

export default Splash;
