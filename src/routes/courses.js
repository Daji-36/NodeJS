const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
const { mongo } = require('mongoose');

// courseController.index là hàm xử lý cho các yêu cầu đến /courses
// Tuyến '/' luôn nằm cuối cùng
// Tuyến đường nào mới nhất sẽ được xử lý trước

router.put('/:id', courseController.update);

router.get('/:id/edit', courseController.edit);

router.get('/create', courseController.create);

router.post('/store', courseController.store);

router.get('/:slug', courseController.show); // Sử dụng courseController.show cho các yêu cầu đến /news/:slug

module.exports = router;
