import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ScannerIcon = (props) => {
  const aspectRatio = 840 / 833;

  return (
    <View style={{ width: props.width, aspectRatio }}>
      <Svg data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840.25 833.8" width="100%" height="100%" {...props}>
        <Path
          d="M865.7 236.7c0-88.4-21.3-109.7-109.7-109.7h-87.8V83.1h131.6a109.68 109.68 0 0 1 109.7 109.7v131.6h-43.9v-87.7Zm-752.45 0v87.8h-43.9V192.8a109.68 109.68 0 0 1 109.7-109.7h131.6V127h-87.8c-87.2 0-109.6 21.3-109.6 109.7Zm6.45 526.6c0 87.1 22.6 109.7 109.7 109.7h87.8v43.9H185.5A109.68 109.68 0 0 1 75.8 807.2V675.5h43.9v87.8Zm746 0v-87.8h43.9v131.6a109.68 109.68 0 0 1-109.7 109.7H668.2V873H756c88.4 0 109.7-22.6 109.7-109.7Z"
          transform="translate(-69.35 -83.1)"
          style={{
            fill: "#fff",
          }}
        />
      </Svg>
    </View>
  );
};

export default ScannerIcon;
