const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index là hàm xử lý cho các yêu cầu đến /news
// Tuyến '/' luôn nằm cuối cùng
// Tuyến đường nào mới nhất sẽ được xử lý trước

router.get('/:slug', newsController.show); // Sử dụng newsController.show cho các yêu cầu đến /news/:slug

router.get('/', newsController.index); // Sử dụng newsController.index cho tất cả các yêu cầu đến /news

module.exports = router;
