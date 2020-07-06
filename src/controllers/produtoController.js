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
        const produtos = await Produto.find().sort({ nome: +1});
        return res.send(produtos);
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de produtos" });
    }
});

router.get("/:id", async (req, res)=>{
    try {
        const produto = await Produto.findById(req.params.id);
        return res.send(produto);
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de produtos" });
    }
});

router.delete("/:id", async (req, res)=>{
    try {
        Produto.findByIdAndDelete(req.params.id, (err)=>{
            if(err) return res.status(400).send({ error: "Falha ao deletar produto" });
            return res.send({success:true});
        });
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de produtos" });
    }
});

router.put("/:id", async (req, res)=>{
    try {
        const prod = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.send(prod);
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de produtos" });
    }
});

module.exports = app => app.use("/produtos",router);