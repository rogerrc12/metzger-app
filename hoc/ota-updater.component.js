import { Dialog } from "@rneui/themed";
import { reloadAsync } from "expo-updates";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useInaccurateTimestamp } from "react-native-use-timestamp";
import { Text } from "../components/typography/text.component";
import { Button } from "../components/UI/button.component";
import { Spacer } from "../components/utils/spacer.component";
import { checkForUpdates } from "../helpers/check-updates";

// How often do we want to render?
const INTERVAL_RENDER = 1000 * (__DEV__ ? 10 : 60);

// How often should it actually check for an update?
const INTERVAL_OTA_CHECK = 1000 * 60 * 15;

export default function OtaUpdater() {
  const now = useInaccurateTimestamp({ every: INTERVAL_RENDER });
  const isMounted = useRef(true);
  const [updateIsAvailable, setUpdateAvailable] = useState(false);

  // Setting this to initially zero means there will _always_ be a check on
  // mount, which is nice, because that means a check when the app starts.
  const lastUpdate = useRef(0);

  const reloadUpdate = async () => await reloadAsync();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (updateIsAvailable) return;

    if (now - lastUpdate.current < INTERVAL_OTA_CHECK) return;

    lastUpdate.current = now;

    checkForUpdates()
      .then(() => {
        isMounted.current && setUpdateAvailable(true);
      })
      .catch((_reason) => {
        /* you can inspect _reason */
        console.log(_reason);
      });
  }, [now]);

  return (
    <Dialog isVisible={updateIsAvailable} onBackdropPress={() => setUpdateAvailable(false)}>
      <View style={{ paddingVertical: 10, justifyContent: "center", alignItems: "center" }}>
        <Text variant="subtitle">Actualización</Text>
        <Spacer variant="top" />
        <Text style={{ textAlign: "center" }}>Hay una nueva actualización disponible. Al aceptar la app se reiniciará para ser implementada.</Text>
        <Spacer variant="top" size={3} />
        <Button onPress={reloadUpdate}>Aplicar</Button>
      </View>
    </Dialog>
  );
}
