const express = require("express");
const Produto = require("../models/Produto");
const router = express.Router();

router.post("/", async (req, res)=>{
    try {
        const produto = await Produto.create(req.body);
        return res.send(produto);
    } catch (error) {
        console.log(error   )
        return res.status(400).send({ error: "Falha na criação do produto" });
    }
});

router.get("/", async (req, res)=>{
    try {
        const produtos = await Produto.find();
        return res.send(produtos);
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de produtos" });
    }
});

module.exports = app => app.use("/produtos",router);