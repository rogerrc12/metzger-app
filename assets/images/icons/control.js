import { View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const ControlIcon = (props) => {
  const aspectRatio = 45 / 45;

  return (
    <View style={{ width: props.width, aspectRatio }}>
      <Svg width="100%" height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Rect y={0.5} width={44} height={44} rx={6} fill="#E6E6E6" />
        <Path
          d="m30.341 15.591-3.932-3.932A2.25 2.25 0 0 0 24.818 11H15.25A2.25 2.25 0 0 0 13 13.25v19.5A2.25 2.25 0 0 0 15.25 35h13.5A2.25 2.25 0 0 0 31 32.75V17.182a2.25 2.25 0 0 0-.659-1.591ZM28.568 17H25v-3.568L28.568 17ZM15.25 32.75v-19.5h7.5v4.875c0 .621.504 1.125 1.125 1.125h4.875v13.5h-13.5Zm12.241-9.031-6.67 6.617a.562.562 0 0 1-.796-.003l-3.52-3.548a.563.563 0 0 1 .004-.796l1.064-1.056a.562.562 0 0 1 .796.003l2.067 2.084 5.207-5.165a.562.562 0 0 1 .795.004l1.057 1.064a.563.563 0 0 1-.004.796Z"
          fill="#4F4F4F"
        />
      </Svg>
    </View>
  );
};

export default ControlIcon;
