// contains periferal functions for logic.js

const RNFS = require('react-native-fs')
import { NativeModules, Dimensions } from 'react-native';
import WallPaperManager from "react-native-set-wallpaper";
import { organiseTask, WallpaperTaskList } from './testing'
const windowWidth = Math.round(Dimensions.get('window').width);
const windowHeight = Math.round(Dimensions.get('window').height);

// const path = `${RNFS.ExternalStorageDirectoryPath}/Documents/Avalible_ID.json`;
const packageName = NativeModules?.AppInfo?.packageName ?? '';
const path = `${RNFS.DocumentDirectoryPath}/${packageName}/Avalible_ID.json`;

exports.GetAvalibleID = (callback) => {

    RNFS.readFile(path)
        .then(value => {
            // Parse the JSON data
            const jsonData = JSON.parse(value);

            // Use the JSON data as needed
            let result = parseInt(jsonData.AvalibleID[0]);
            if (result == 0) {
                result = parseInt(jsonData.AvalibleID[1]);
                jsonData.AvalibleID.splice(1, 1)
            }
            else {
                jsonData.AvalibleID.splice(0, 1)
            }

            RNFS.writeFile(path, JSON.stringify(jsonData));

            callback(result, null);
        })

        .catch(error => {
            console.error(error);
        });
}

exports.PutAvalibleID = (TaskID) => {

    RNFS.readFile(path)
        .then(value => {
            // Parse the JSON data
            const jsonData = JSON.parse(value);

            // Use the JSON data as needed
            jsonData.AvalibleID.push(TaskID)
            console.log(jsonData)
            RNFS.writeFile(path, JSON.stringify(jsonData));

        })

        .catch(error => {
            console.error(error);
        });
}

function setWall(URL) {
    WallPaperManager.setWallpaper({ uri: URL }, (res) => {
        console.log(res);
    });
}
exports.SetWallpaper = () => {
    const FontSize = '56'
    organiseTask()

    WallpaperTaskList().then(TaskString => {
        const plainText = TaskString
        const Background = '000000,128'
        const TextColour = 'fff,255'
        const url = "https://fakeimg.pl/" + windowWidth + 'x' + windowHeight + '/' + Background + '/' + TextColour + '/?font_size=' + FontSize + '&text=' + encodeURIComponent(plainText);
        setWall(url);
    }).catch(error => {
        console.error(error);
    });
}
// SetWallpaper('000000', 'fff', "56", "Hello \n How \n Are \n You");
// export default SetWallpaper; 