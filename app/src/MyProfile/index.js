import React, {useEffect, useState} from 'react';
import {View, StatusBar, Image, ImageBackground} from 'react-native';
import {BaseColor, BaseStyle, Images} from '../../config';
import styles from './styles';
import Header from '../../components/Header';
import {moderateScale} from '../../config/scaling';
import {Text} from '../../components';
import {useDispatch, useSelector} from 'react-redux';

const MyProfile = ({}) => {
  useEffect(() => {}, []);

  const {user} = useSelector(state => ({
    user: state.loginReducer.user.userDetails?.data?.Users,
  }));
  console.log('User', user);

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />

      <ImageBackground
        style={{width: '100%', height: 280}}
        source={Images.ic_background}>
        <ImageBackground
          style={{width: '100%', flex: 1}}
          source={Images.ic_dash}>
          <Header
            onPressLeft={() => {
              alert('Coming Soon');
            }}
            renderLeft={() => {
              return <Image source={Images.ic_back}></Image>;
            }}
            title={'My Profile'}></Header>

          <View
            style={{
              marginTop: moderateScale(150),
              backgroundColor: BaseColor.white,
            }}>
            <Text
              style={{marginLeft: moderateScale(20)}}
              title1
              bold
              whiteColor>
              {'Leroy Morais'}
            </Text>
            <View style={styles.MainView}>
              <Text primaryColor>{'CONTACT INFO'}</Text>

              <View style={styles.cardView}>
                <View>
                  <Text blackColor>{'Phone Number'}</Text>
                  <Text caption1 lightGrayColor>
                    {user?.phone_number}
                  </Text>
                </View>
                <Image source={Images.ic_call}></Image>
              </View>

              <View style={styles.lineView}></View>

              <View style={styles.cardView}>
                <View>
                  <Text blackColor>{'Email Address'}</Text>
                  <Text caption1 lightGrayColor>
                    {user?.email}
                  </Text>
                </View>
                <Image source={Images.ic_mail}></Image>
              </View>
            </View>
            <View style={[styles.MainView, {marginTop: moderateScale(30)}]}>
              <Text primaryColor>{'ADDRESS'}</Text>

              <View style={{marginTop: moderateScale(20)}}>
                <Text blackColor>{'Street Address'}</Text>
                <Text caption1 lightGrayColor>
                  {user?.street_address}
                </Text>
              </View>
              <View style={styles.lineView}></View>
              <View style={{marginTop: moderateScale(20)}}>
                <Text blackColor>{'Suburb'}</Text>
                <Text caption1 lightGrayColor>
                  {user?.suburb}
                </Text>
              </View>
              <View style={styles.lineView}></View>
              <View style={{marginTop: moderateScale(20)}}>
                <Text blackColor>{'City'}</Text>
                <Text caption1 lightGrayColor>
                  {user?.city}
                </Text>
              </View>
              <View style={styles.lineView}></View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.labelView}>
                  <Text blackColor>{'State'}</Text>
                  <Text caption1 lightGrayColor>
                    {user?.state}
                  </Text>
                </View>
                <View style={styles.lineVerticleView}></View>
                <View style={styles.labelView}>
                  <Text blackColor>{'country'}</Text>
                  <Text numberOfLines={1} caption1 lightGrayColor>
                    {user?.country?.country_name}
                  </Text>
                </View>
                <View style={styles.lineVerticleView}></View>
                <View style={styles.labelView}>
                  <Text blackColor>{'Postcode'}</Text>
                  <Text caption1 lightGrayColor>
                    {user?.postcode}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default MyProfile;
