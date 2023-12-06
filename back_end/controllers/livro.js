function getLivros(req, res){
    try{
        throw new Error("mensagem de erro escolhida");
        res.send("Um livro retornado");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getLivros
}