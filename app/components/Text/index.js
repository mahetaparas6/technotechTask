import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { BaseColor, FontWeight, Typography } from '../../config';
import fonts from '../../config/fonts';

export default function Index(props) {
  const {
    //props style
    header,
    title1,
    title2,
    title3,
    headline,
    body1,
    body2,
    callout,
    subhead,
    footnote,
    caption1,
    caption2,
    overline,
    // props font
    thin,
    ultraLight,
    light,
    regular,
    medium,
    semibold,
    bold,
    heavy,
    black,
    //custom color
    primaryColor,
    blackColor,
    whiteColor,
    lightGrayColor,
    //numberOfLines
    numberOfLines,
    textAlign,
    //custom
    style,
    //children
    children,
  } = props;

  let textStyle = StyleSheet.flatten([
    header && Typography.header,
    title1 && Typography.title1,
    title2 && Typography.title2,
    title3 && Typography.title3,
    headline && Typography.headline,
    body1 && Typography.body1,
    body2 && Typography.body2,
    callout && Typography.callout,
    subhead && Typography.subhead,
    footnote && Typography.footnote,
    caption1 && Typography.caption1,
    caption2 && Typography.caption2,
    overline && Typography.overline,
    //custom for font
    thin && { fontWeight: FontWeight.thin },
    ultraLight && { fontWeight: FontWeight.ultraLight },
    light && { fontWeight: FontWeight.light },
    regular && { fontWeight: FontWeight.regular },
    medium && { fontWeight: FontWeight.medium },
    semibold && { fontWeight: FontWeight.semibold },
    bold && { fontWeight: FontWeight.bold },
    heavy && { fontWeight: FontWeight.heavy },
    black && { fontWeight: FontWeight.black },
    // default color
    { color: BaseColor.whiteColor },
    //custom for color
    primaryColor && { color: BaseColor.primaryColor },
    blackColor && { color: BaseColor.blackColor },
    whiteColor && { color: BaseColor.whiteColor },
    lightGrayColor && { color: BaseColor.lightGrayColor },
    { fontFamily: fonts.Poppins_Regular, textAlign, letterSpacing: 1 },
    style && style,
  ]);

  

  return (
    <Text style={textStyle}  numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

// Define typechecking
Index.propTypes = {
  //define style
  header: PropTypes.bool,
  title1: PropTypes.bool,
  title2: PropTypes.bool,
  title3: PropTypes.bool,
  headline: PropTypes.bool,
  body1: PropTypes.bool,
  body2: PropTypes.bool,
  callout: PropTypes.bool,
  subhead: PropTypes.bool,
  footnote: PropTypes.bool,
  caption1: PropTypes.bool,
  caption2: PropTypes.bool,
  overline: PropTypes.bool,
  //define font custom
  thin: PropTypes.bool,
  ultraLight: PropTypes.bool,
  light: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
  black: PropTypes.bool,
  //custon for text color
  primaryColor: PropTypes.bool,
  blackColor: PropTypes.bool,
  whiteColor: PropTypes.bool,
  lightGrayColor: PropTypes.bool,
  //numberOfLines
  numberOfLines: PropTypes.number,
  textAlign: PropTypes.string,
  //custom style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node, // plain text
};

Index.defaultProps = {
  //props for style
  header: false,
  title1: false,
  title2: false,
  title3: false,
  headline: false,
  body1: false,
  body2: false,
  callout: false,
  subhead: false,
  footnote: false,
  caption1: false,
  caption2: false,
  overline: false,
  //props for font
  thin: false,
  ultraLight: false,
  light: false,
  regular: false,
  medium: false,
  semibold: false,
  bold: false,
  heavy: false,
  black: false,
  //custon for text color
  primaryColor: false,
  blackColor: false,
  whiteColor: false,
  lightGrayColor: false,
  //numberOfLines
  numberOfLines: 10,
  textAlign: 'left',
  //custom style
  style: {},
  children: '',
};
