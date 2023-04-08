const RNFS = require('react-native-fs')
import { NativeModules } from 'react-native';

const packageName = NativeModules?.AppInfo?.packageName ?? '';
const path = `${RNFS.DocumentDirectoryPath}/${packageName}/QuickTasks.json`;

exports.resetJson = () => {
    let QuickTasks = {
        "Tasks":
            [
                "sample"
            ]
    }
    RNFS.writeFile(path, JSON.stringify(QuickTasks));
    console.log(JSON.stringify(QuickTasks))
}

exports.addQTask = (Tlist) => {

    RNFS.readFile(path)
        .then(value => {
            // Parse the JSON data
            const jsonData = JSON.parse(value);

            // Use the JSON data as needed
            jsonData.Tasks = Tlist

            RNFS.writeFile(path, JSON.stringify(jsonData));

            console.log(JSON.stringify(jsonData))
        })
        .catch(error => {
            console.error(error);
        });

}


