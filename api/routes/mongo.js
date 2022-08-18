var express = require("express");
var router = express.Router();
const mainMongoFunction = require("../models/card");

/* GET users listing. */
router.get("/", function (req, res, next) {
    mainMongoFunction();
    res.send("Documento incluído com sucesso");
});

module.exports = router;
