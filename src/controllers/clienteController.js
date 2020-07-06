const express = require("express");
const Cliente = require("../models/Cliente");
const router = express.Router();

router.post("/", async (req, res)=>{
    try {
        const cliente = await Cliente.create(req.body);
        return res.send(cliente);
    } catch (error) {
        console.log(error   )
        return res.status(400).send({ error: "Falha na criação do clientes" });
    }
});

router.get("/", async (req, res)=>{
    try {
        const clientes = await Cliente.find();
        return res.send(clientes);
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de clientes" });
    }
});

router.get("/:id", async (req, res)=>{
    try {
        const cliente = await Cliente.findById(req.params.id);
        return res.send(cliente);
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de clientes" });
    }
});

router.delete("/:id", async (req, res)=>{
    try {
        Cliente.findByIdAndDelete(req.params.id, (err)=>{
            if(err) return res.status(400).send({ error: "Falha ao deletar Cliente" });
            return res.send({success:true});
        });
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de clientes" });
    }
});

router.put("/:id", async (req, res)=>{
    try {
        const prod = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.send(prod);
    } catch (error) {
        return res.status(400).send({ error: "Falha ao encontrar lista de clientes" });
    }
});

module.exports = app => app.use("/clientes",router);