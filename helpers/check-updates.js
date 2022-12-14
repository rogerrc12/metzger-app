import * as Updates from "expo-updates";

export async function checkForUpdates() {
  const update = await Updates.checkForUpdateAsync();
  if (!update.isAvailable) {
    throw new Error("No updates available");
  }

  const result = await Updates.fetchUpdateAsync();
  if (!result.isNew) {
    throw new Error("Fetched update is not new");
  }

  return true;
}
