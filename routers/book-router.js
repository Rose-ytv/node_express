const express = require("express");
const controller  = require("../controllers/book.rontrollers");
const router = express.Router();

router.get("/", 
    (req, res, next) =>{
       console.log("verification du token");
       next();
    },
    controller.getAll
);

router.post("/", controller.addOne);

router.get("/:id", controller.getOne);

router.put("/:id", controller.updateOne);

router.delete("/:id", controller.deleteOne);

module.exports = router;
