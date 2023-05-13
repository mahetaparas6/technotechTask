import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 1024;
const guidelineBaseHeight = 1400;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
