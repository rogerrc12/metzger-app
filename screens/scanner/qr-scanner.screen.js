import { useIsFocused } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScannerIcon from "../../assets/images/icons/scanner";
import { Spacer } from "../../components/utils/spacer.component";
import { getAlertsByExtinguisher } from "../../services/alerts/actions";
import { getExtinguisherBySerial, validateQrCode } from "../../services/extinguishers/actions";
import { CameraWrapper, SpinnerWrapper } from "./components/scanner.styles";

const QrScannerScreen = ({ route }) => {
  const isFocused = useIsFocused();

  const dispatch = useDispatch(),
    params = route.params,
    [hasPermission, setHasPermission] = useState(null),
    isValidating = useSelector((state) => state.extinguishers.isValidating),
    isLoading = useSelector((state) => state.alerts.isLoading),
    [scanned, setScanned] = useState(false),
    [cameraType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
      setScanned(true);

      if (params?.type === "add-extinguisher") return dispatch(validateQrCode(data));
      if (params?.type === "search-alerts") return dispatch(getAlertsByExtinguisher(data));

      dispatch(getExtinguisherBySerial({ serial: data, type: params?.type }));
    },
    onOpenConfig = () => Linking.openSettings();

  if (hasPermission === null) return null;

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
    <Camera
      barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr] }}
      type={cameraType}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    >
      {isValidating || (params?.type === "search-alerts" && isLoading) ? (
        <SpinnerWrapper>
          <ActivityIndicator color="#0057D6" size="large" />
        </SpinnerWrapper>
      ) : (
        <ScannerIcon width={235} />
      )}
    </Camera>
  ) : null;
};

export default QrScannerScreen;
