const FileHandler = require("./FileHandler");

const fs = require("fs");

const path = "../livros.json"
// const oldData = JSON.parse(fs.readFileSync(path));
const newData = {
    "id": "0",
    "name": "The best of the books"
};

// fs.writeFileSync(path, JSON.stringify([...oldData, newData]));

// console.log(JSON.parse(fs.readFileSync(path)));
const id = FileHandler.addData(path, newData);
console.log(FileHandler.getAllData(path));
