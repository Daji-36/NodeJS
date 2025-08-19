const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch((err) => next(err));
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoID}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
    // [GET] /courses/edit/:id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course), // Chuyển đổi đối tượng Mongoose thành đối tượng thuần JavaScript
                });
            })
            .catch((err) => next(err));
    }
    // [PUT] /courses/:id/
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => next(err));
    }
}

module.exports = new CourseController(); // Xuất CourseController
