const apiRouter = require("express").Router()
const { createVisitorData } = require("../controllers/visitorCtrl");

apiRouter.post("/sendVisitorData", async (req,res) => {
        if(await createVisitorData(req.body)){
            res.send(true)
        }else{
            res.status(400).send(false)
        }
})

module.exports = apiRouter;