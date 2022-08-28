const express = require("express");
const { adminModel } = require("../models/admin");
const { adminAccess, lookupVisitor } = require("../controllers/adminCtrl");

const adminRouter = express.Router();

adminRouter.post("/", async(req,res) => {
    res.send(await lookupVisitor(req.body))
})

adminRouter.post("/access", async(req, res) => {
    console.log(req.body)
    res.send(await adminAccess(req.body))
})

adminRouter.post("/get", (req,res) => {
    const { adminKey } = req.body
    console.log(adminKey)
    adminModel.create({adminKey:adminKey})
    .then((result) => {
        res.send(true)
    }).catch((err) => {
        res.status(500).send(err);
        console.log(err)
    })
})

module.exports = adminRouter;