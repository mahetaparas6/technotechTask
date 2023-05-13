import { StyleSheet } from 'react-native';

export const FontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

export const Typography = StyleSheet.create({
  header: {
    fontSize: 34,
    fontWeight: FontWeight.bold,
  },
  title1: {
    fontSize: 28,
    fontWeight: FontWeight.bold,
  },
  title2: {
    fontSize: 22,
    fontWeight: FontWeight.bold,
  },
  title3: {
    fontSize: 20,
    fontWeight: FontWeight.bold,
  },
  headline: {
    fontSize: 17,
    fontWeight: FontWeight.bold,
  },
  body1: {
    fontSize: 17,
    fontWeight: FontWeight.regular,
  },
  body2: {
    fontSize: 14,
    fontWeight: FontWeight.regular,
  },
  callout: {
    fontSize: 17,
    fontWeight: FontWeight.regular,
  },
  subhead: {
    fontSize: 15,
    fontWeight: FontWeight.regular,
  },
  footnote: {
    fontSize: 13,
    fontWeight: FontWeight.regular,
  },
  caption1: {
    fontSize: 12,
    fontWeight: FontWeight.regular,
  },
  caption2: {
    fontSize: 11,
    fontWeight: FontWeight.regular,
  },
  overline: {
    fontSize: 10,
    fontWeight: FontWeight.regular,
  },
});
