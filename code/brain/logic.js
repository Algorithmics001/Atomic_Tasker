// this is the file that carries the code for logic of TODO APP

const Utility = require('./UtilityFuncs')

const fs = require('react-native-fs')
const path = './UserData.json'

// add task function

exports.addTask = (TaskTitle, TaskDesc, TaskPrio, TaskDate, TaskDura) => {
    fs.readFile(path, 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err)
        }
        else {
            // reading into 'data'
            const data = JSON.parse(jsonString);

            let TaskID = 0
            Utility.GetAvalibleID((result, error) => {
                if (error) {
                    console.error(error);
                } else {
                    TaskID = result
                }
            });

            var newEntry = { id: TaskID, title: TaskTitle, description: TaskDesc, priority: TaskPrio, date: TaskDate, duration: TaskDura };

            // adding newEntry to 'data'
            data.Task_List.push(newEntry)

            // writing into 'data'
            jsonString = JSON.stringify(data)
            fs.writeFileSync('./UserData.json', jsonString, 'utf-8');
        }
    })
}

// remove task function

exports.removeTask = (TaskID) => {
    fs.readFile(path, 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err)
        }
        else {
            const data = JSON.parse(jsonString);

            function removeObject(data, id) {
                let updatedData = data;
                updatedData.Task_List = updatedData.Task_List.filter(task => task.id !== id);
                return updatedData;
            }

            const updatedJsonData = removeObject(data, TaskID);
            jsonString = JSON.stringify(updatedJsonData)
            fs.writeFileSync(path, jsonString, 'utf-8');
        }
    })
}

// edit task

exports.editTask = (TaskID, attrib, value) => {
    fs.readFile(path, 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err)
        }
        else {
            const data = JSON.parse(jsonString);

            function getObject(jsonData, id) {
                let task = jsonData.Task_List.find(task => task.id === id);
                return task;
            }

            const task = getObject(data, TaskID)

            // const InputVal = ['title', 'description', 'priority', 'date', 'duration']
            // var ChangeVal = [task.title, task.description, task.priority, task.date, task.duration]

            // ChangeVal[InputVal.indexOf(attrib)] = value

            if(attrib == 'title'){
                task.title = value
            }
            else if(attrib == 'description'){
                task.description = value
            }
            else if(attrib == 'priority'){
                task.priority = value
            }
            else if(attrib == 'date'){
                task.date = value
            }
            else if(attrib == 'duration'){
                task.duration = value
            }

            data.Task_List = data.Task_List.map(t => t.id === task.id ? task : t);

            fs.writeFile(path, JSON.stringify(data), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        }
    })
}


// get path

exports.getPath = () => {
    return path
}