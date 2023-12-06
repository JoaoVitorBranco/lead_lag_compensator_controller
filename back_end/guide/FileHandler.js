const fs = require("fs");

function getAllData(path){
    return JSON.parse(fs.readFileSync(path));
}

function addData(path, newData){
    try{
        const oldData = JSON.parse(fs.readFileSync(path));
        fs.writeFileSync(path, JSON.stringify([...oldData, newData]));
        return true;
    } catch(err){
        return false;
    }
}

function removeData(path, id){
    let aux = -1;
    let data = JSON.parse(fs.readFileSync(path));
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element.id == id){
            aux = index;
            break;
        }
    }

    if(aux != -1){
        delete data[aux];
        const newData = data.filter(element => element != null);
        fs.writeFileSync(path, JSON.stringify(newData));
    }
    return aux;
}

module.exports = {
    getAllData,
    addData,
    removeData,
}