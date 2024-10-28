const express = require('express');
const router = express.Router();
const newsController = require("../controllers/news.controller");

router.get('/', newsController.getAll);
router.get('/archived', newsController.getAllArchived);

router.get('/:id', newsController.getById);

router.post('/', newsController.create);

router.patch('/:id', newsController.changeToArchived);

router.delete('/:id', newsController.deletetById);

module.exports = router