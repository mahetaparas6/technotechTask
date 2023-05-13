import { StyleSheet } from 'react-native';
import { BaseColor, Typography, FontWeight } from '../../config';
import { moderateScale, verticalScale } from '../../config/scaling';

export default StyleSheet.create({
  default: {
    height: verticalScale(90),
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(15),
    justifyContent: 'center',
    // shadowOffset: { height: 2, width: 0 },
    //   shadowOpacity: 1,
    //   shadowRadius: 4,
    //   backgroundColor: 'transparent',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: Platform.OS == 'ios' ? 0.9 : 0.8,
    shadowRadius: 5,
    elevation: 2,
    shadowColor: BaseColor.buttonGradient2,
  },
  textDefault: {
    ...Typography.body2,
    color: BaseColor.whiteColor,
    fontWeight: FontWeight.semibold,
  },
  outline: {
    borderWidth: 1,
  },
  full: {
    width: '100%',
    alignSelf: 'auto',
  },
  round: {
    borderRadius: 28,
  },
});
