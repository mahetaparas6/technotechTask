import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { BaseColor, Images } from '../../config';
import Text from '../Text';
import { verticalScale } from '../../config/scaling';

const CheckBox = ({
  onPress = () => {},
  title = '',
  checked = true,
  color = '',
  style,
}) => {
  return (
    <TouchableOpacity style={[style,{ flexDirection: 'row', alignItems: 'center' }]} onPress={onPress}>
    <Image
        tintColor={BaseColor.blackColor}
        style={{width: verticalScale(35), height: verticalScale(35), tintColor: BaseColor.buttonGradient2}}
        source={checked ? Images.ic_checked : Images.ic_unchecked}></Image>
         <Text caption1 blackColor style={{ paddingHorizontal: 8 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
