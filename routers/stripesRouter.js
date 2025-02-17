const express = require ("express");
const router = express.Router();
const stripesController = require('../controllers/stripesController.js');

router.get("/", stripesController.index);

router.get("/:id", stripesController.show);

router.post("/", stripesController.store);


module.exports = router;