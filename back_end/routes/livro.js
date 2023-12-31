const { Router } = require("express");
const { getLivros, getLivro } = require("../controllers/livro");

const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/", (req, res) => {
    res.send("Livro criado");
});

router.patch("/", (req, res) => {
    res.send("Livro editado");
});

router.delete("/", (req, res) => {
    res.send("Livro deletado");
});

module.exports = router;