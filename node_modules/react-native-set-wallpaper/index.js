import { Image, NativeModules } from "react-native";

module.exports = {
  setWallpaper: (source, callback = (res) => {}) => {
    NativeModules.WallPaperManager.setWallpaper(
      Image.resolveAssetSource(source),
      callback
    );
  },
};
