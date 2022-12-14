import { View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const InspectionIcon = (props) => {
  const aspectRatio = 44 / 44;

  return (
    <View style={{ width: props.width, aspectRatio }}>
      <Svg width="100%" height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Rect width={44} height={44} rx={6} fill="#E6E6E6" />
        <Path d="M21 29a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM31 31l-4.35-4.35" stroke="#4F4F4F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};

export default InspectionIcon;
