// contains periferal functions for logic.js

const fs = require('react-native-fs')
const path = './Avalible_ID.json'

exports.GetAvalibleID = (callback) => {
    fs.readFile(path, 'utf-8', (err, jsonString) => {
        if(err){
            console.log(err)
        }
        else{
            const data = JSON.parse(jsonString);
            if (parseInt(data.AvalibleID.length) < 0){
                return null
            }
            else {
                var result = parseInt(data.AvalibleID[0]);
                data.AvalibleID.splice(0, 1);

                jsonString = JSON.stringify(data)    
                fs.writeFileSync(path, jsonString, 'utf-8');

                callback(result, null)
            }
        }
    })
}

