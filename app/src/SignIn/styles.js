import {Platform, StyleSheet} from 'react-native';
import {BaseColor} from '../../config';
import {moderateScale} from '../../config/scaling';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {paddingHorizontal: 20},
  upView: {
    height: '30%',
    backgroundColor: BaseColor.whiteColor,
    opacity: 0.99,
    width: '100%',
    position: 'absolute',
  },
  MainView: {
    backgroundColor: BaseColor.whiteColor,
    marginTop: moderateScale(80),
    marginHorizontal: moderateScale(30),
    padding: moderateScale(20),
    borderRadius: 15,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: Platform.OS == 'ios' ? 0.5 : 0.8,
    shadowRadius: 2,
    elevation: 5,
    shadowColor: BaseColor.lightGrayColor,
  },
});
