import RNFS from 'react-native-fs';
import React, { useState } from 'react';

import WallPaperManager from "react-native-set-wallpaper";

function setWall(URL){
  WallPaperManager.setWallpaper({ uri: URL }, (res) => {
  console.log(res);
});
}

// import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';
const downloadImage = async (url, path) => {
    try {
      const { promise } = RNFS.downloadFile({
        fromUrl: url,
        toFile: path,
      });
      const downloaded = await promise;
      console.log(downloaded);
    } catch (error) {
      console.error(error);
    }
  };
  
  function Wall() {
    
      const url = 'https://fakeimg.pl/850x1200/000000%2C128/fff%2C255/?text=Hello%0AWorld%0AMyself%0Asangam%20arora&font_size=56';
    
      const sourcePath = `${RNFS.DocumentDirectoryPath}/image.jpg`;
      downloadImage(url, sourcePath);
      const targetPath = `${RNFS.ExternalStorageDirectoryPath}/Documents/hello4.jpg`;

      const moveFile = async () => {
        try {
          await RNFS.moveFile(sourcePath, targetPath);
          console.log('File moved successfully!');
        } catch (error) {
          console.error(error);
        }
      };
      moveFile();
      setWall(url)
  }
  
export default Wall  