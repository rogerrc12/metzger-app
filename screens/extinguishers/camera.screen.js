import { FontAwesome } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "../../components/typography/text.component";
import { CameraWrapper } from "./components/extinguishers.styles";

const CameraScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  const [hasPermission, setHasPermission] = useState(null),
    [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const onOpenConfig = () => Linking.openSettings(),
    onTakePhoto = async () => {
      if (camera) {
        try {
          await camera.takePictureAsync({
            base64: true,
            quality: 1,
            fixOrientation: true,
            onPictureSaved: (photo) => {
              navigation.navigate("RegisterExtinguisher", { photo });
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    };

  if (hasPermission === false) {
    return (
      <CameraWrapper>
        <Text variant="bold">Debes aceptar los permisos del uso de la camara para poder tomar la foto de tu documento.</Text>
        <Spacer variant="top" />
        <Link onPress={onOpenConfig}>
          <Text>
            <Text variant="bold">Ir a configuración</Text>
          </Text>
        </Link>
      </CameraWrapper>
    );
  }

  return isFocused ? (
    <Camera ref={(ref) => setCamera(ref)} style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }} type={CameraType.back}>
      <TouchableOpacity style={{ marginBottom: 30 }} onPress={onTakePhoto}>
        <FontAwesome name="circle-thin" size={100} color="#fff" />
      </TouchableOpacity>
    </Camera>
  ) : null;
};

export default CameraScreen;
