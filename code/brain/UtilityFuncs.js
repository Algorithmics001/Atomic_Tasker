// contains periferal functions for logic.js

const RNFS = require('react-native-fs')
const path = `${RNFS.ExternalStorageDirectoryPath}/Documents/Avalible_ID.json`;

exports.GetAvalibleID = (callback) => {

    RNFS.readFile(path)
    .then(value => {
        // Parse the JSON data
        const jsonData = JSON.parse(value);

        // Use the JSON data as needed
        let result = parseInt(jsonData.AvalibleID[0]);
        if(result == 0){
            result = parseInt(jsonData.AvalibleID[1]);
            jsonData.AvalibleID.splice(1, 1)
        }
        else{
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

        RNFS.writeFile(path, JSON.stringify(jsonData));

    })

    .catch(error => {
        console.error(error);
    });
}

