const express = require('express');
const router = express.Router();
const newsController = require("../controllers/news.controller");

router.get('/', newsController.getAll);
router.get('/:id', newsController.getById);

router.post('/', newsController.create);

router.delete('/:id', newsController.deletetById);

module.exports = router