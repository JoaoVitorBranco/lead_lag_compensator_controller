const FileHandler = require("../services/FileHandler");

const path = "../back_end/livros.json"

function getLivros(req, res){
    try{
        const livros = FileHandler.getAllData(path);
        res.send(livros);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

function getLivro(req, res){
    try{
        const id = req.params.id;
        const livro = FileHandler.getData(path, id);
        if(livro == null){
            throw new Error("Livro não encontrado");
        }
        res.send(livro);
    } catch (err) {
        if(err.message == "Livro não encontrado"){
            return res.status(404).send(err.message);
        }
        else{
            res.status(500).send(err.message);
        }
    }
}

module.exports = {
    getLivros,
    getLivro
}