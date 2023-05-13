import React, {useEffect} from 'react';
import {StatusBar, TouchableOpacity, View, useColorScheme} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './styles';

export default function Header(props) {
  const {
    style,
    styleLeft,
    styleContentLeft,
    styleContentCenter,
    title,
    onPressLeft,
    renderLeft,
    titleStyle,
  } = props;

  return (
    <View style={[styles.contain, style]}>
      <View style={[{flex: 1}, styleLeft]}>
        <TouchableOpacity
          style={[styles.contentLeft, styleContentLeft]}
          onPress={onPressLeft}>
          {renderLeft()}
        </TouchableOpacity>
      </View>
      <View style={[styles.contentCenter, styleContentCenter]}>
        <Text style={titleStyle} title3 bold numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
}

Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleContentLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleContentCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  onPressLeft: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  barStyle: PropTypes.string,
};

Header.defaultProps = {
  style: {},
  styleLeft: {},
  styleContentLeft: {},
  styleCenter: {},
  styleContentCenter: {},
  renderLeft: () => {},
  onPressLeft: () => {},
  title: 'Title',
  subTitle: '',
  barStyle: '',
};
