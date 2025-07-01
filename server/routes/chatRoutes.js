const express = require('express');
const router = express.Router();
const { askAI } = require('../controllers/chatController');

router.post('/chat', askAI);

module.exports = router;
