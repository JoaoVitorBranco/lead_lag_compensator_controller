const express = require("express");
const rotaLivro = require("./routes/livro");

const app = express();

app.use("/livros", rotaLivro);

const port = 8000;


app.get("/", (req, res) => {
    res.send("Hello World Salve salve!");
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
