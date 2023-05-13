import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from './scaling';
import { BaseColor } from './theme';

/**
 * Common basic style defines
 */
export const BaseStyle = StyleSheet.create({
  tabBar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: BaseColor.backgroundColor2,
  },
  bodyPaddingDefault: {
    
    paddingHorizontal: 20,
     paddingTop: 20
  },
  bodyMarginDefault: {
    marginHorizontal: 20,
  },
  textInput: {
    height: verticalScale(100),
    borderRadius: 10,
    paddingHorizontal: moderateScale(20),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: BaseColor.lightGrayColor,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: BaseColor.primaryColor
  },
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
