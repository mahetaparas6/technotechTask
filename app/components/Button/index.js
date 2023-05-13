import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BaseColor, Images} from '../../config';
import Text from '../Text';
import styles from './styles';

export default function Button(props) {
  const {
    style,
    styleText,
    outline,
    full,
    round,
    loading,
    children,
    disabled,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={[{
        backgroundColor: BaseColor.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        borderRadius: 5,
        height: 56,
        flexDirection: 'row',
      }, style]}
      activeOpacity={0.9}>
      <Text
        style={StyleSheet.flatten([
          styles.textDefault,
          outline && {color: BaseColor.blackColor},
          disabled && {color: BaseColor.whiteColor},
          styleText,
        ])}
        numberOfLines={1}>
        {children}
      </Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={outline ? BaseColor.whiteColor : BaseColor.whiteColor}
          style={{paddingLeft: 5}}
        />
      ) : null}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.node,
  outline: PropTypes.bool,
  full: PropTypes.bool,
  round: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  icon: null,
  outline: false,
  full: false,
  round: false,
  loading: false,
};
