# react-native-set-wallpaper

Set wallpaper with react-native

## Install

```sh
npm install --save react-native-set-wallpaper
```

## Link

```sh
react-native link react-native-set-wallpaper
```

## Usage

```js
import WallPaperManager from "react-native-set-wallpaper";

WallPaperManager.setWallpaper({ uri: "http://example.com/test.png" }, (res) => {
  console.log(res);
});
```
