const express = require('express');
const {
    create,
    destroy,
    index,
    show,
    update,
} = require('../controllers/eliquidController.js');

const router = express.Router();

// Eliquids routes
router.get('/eliquids', index);
router.post('/eliquids', create);
router.get('/eliquids/show/:id', show);
router.patch('/eliquids/update/:id', update);
router.delete('/eliquids/delete/:id', destroy);

module.exports = router;
