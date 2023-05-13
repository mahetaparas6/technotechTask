import React, {useEffect, useState} from 'react';
import {View, StatusBar, Platform, Image} from 'react-native';
import {BaseColor, BaseStyle, Images} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {moderateScale} from '../../config/scaling';
import {TextInput, Text, Button} from '../../components';
import CheckBox from '../../components/CheckBox';
import styles from './styles';
import { LoginApi, loginUsers } from '../../redux/services/ApiService';
import { useDispatch, useSelector } from "react-redux";


const SignIn = ({navigation}) => {
  const [URL, setURL] = useState('user.techno.com');
  const [Username, setUsername] = useState('practical@gmail.com');
  const [Password, setPassword] = useState('user@123');
  const [checkRemember, setCheckRemember] = useState(false);
  const [checkAccept, setcheckAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => ({
    user: state.loginReducer.user,
    isLoading: state.loginReducer.user.isLoading,
  }));

  const LoginApiCall = async () => {
    if (URL == '') {
      alert(' enter URL');
    } else if (Username == '') {
      alert(' enter Username');
    } else if (Password == '') {
      alert(' enter Password');
    }else if (!checkRemember) {
      alert('Please check remember me');
    } else if (!checkAccept) {
      alert('Please check terms and condition');
    } else  {
      setLoading(true);
      const params = {
        username: Username,
        password: Password,
        url: URL,
        multiple_user_login: {
          device_token: 'dMChrtBklsU:APA91bGv-',
          device_type: 'android',
          dedevicevice_model: 'Nokia 4.2',
          _version: '10',
          app_version: '2.0',
          device_name: 'Nokia',
          device_uid: 'f123447630d7c358',
        },
      };

      dispatch(loginUsers(params));

      // LoginApi(params)
      //   .then(res => {
      //     setLoading(false);
      //     console.log('Response Login ', res);
      //     if (res.status) {
      //       AsyncStorage.setItem('isLogin', 'true');
      //       AsyncStorage.setItem('UserId', res.data.Users.id.toString());
      //       AsyncStorage.setItem('email', res.data.Users.email);
      //       navigation.navigate('AppNavigator');
      //     } else {
      //       setLoading(false);
      //       alert(res.message);
      //     }
      //   })
      //   .catch(error => {
      //     setLoading(false);
      //     console.log('error', error);
      //     alert(error.message);
      //   });
    }
  };

  async function getUserData(DATA) {
    if (DATA.userDetails.code == 200) {
      // AsyncStorage.setItem('isLogin', 'true');
      navigation.replace('AppNavigator');
    } else {
      alert(DATA.userDetails.message);
    }
  }
  useEffect(() => {
    if (user.userDetails !== null) {
      if (user.userDetails) {
        getUserData(user);
        console.log("Login Data===>", JSON.stringify(user));
      } else {
        alert(user.userDetails.message);
      }
    }
  }, [user]);

 

  return (
    <View style={BaseStyle.safeAreaView}>
      <StatusBar hidden />
      <View
        style={styles.upView}
      />
      <View style={styles.MainView}>
        <Image style={{alignSelf: 'center'}} source={Images.app_logo}></Image>

        <TextInput
          mTop={moderateScale(50)}
          value={URL}
          onChangeText={text => setURL(text)}
          iconLeft={Images.ic_link}
          placeholder={'URL'}
        />

        <TextInput
          value={Username}
          onChangeText={text => setUsername(text)}
          iconLeft={Images.ic_user}
          placeholder={'Username'}
        />

        <TextInput
          value={Password}
          onChangeText={text => setPassword(text)}
          iconLeft={Images.ic_padlock}
          placeholder={'Password'}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: moderateScale(20),
          }}>
          <CheckBox
            onPress={() => {
              setCheckRemember(!checkRemember);
            }}
            checked={checkRemember}
            title={'Remember me'}></CheckBox>

          <Text caption1 primaryColor>
            {'Forgot Password?'}
          </Text>
        </View>

        <CheckBox
          style={{marginTop: 10}}
          onPress={() => {
            setcheckAccept(!checkAccept);
          }}
          checked={checkAccept}
          title={'I accept Terms & Condition'}></CheckBox>

        <View style={{alignItems: 'center', marginTop: moderateScale(30)}}>
          <Button
            onPress={() => {
              LoginApiCall();
            }}>
            {'SignIn'}
          </Button>

          <Text caption1 primaryColor style={{marginTop: moderateScale(20)}}>
            {'Privacy Policy'}
            <Text lightGrayColor caption1>
              {' and '}
              <Text caption1 primaryColor>
                {'Terms & Condition'}
              </Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
