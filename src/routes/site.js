const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// siteController.search là hàm xử lý cho các yêu cầu đến /search
router.get('/search', siteController.search);

router.use('/', siteController.index);

module.exports = router;
