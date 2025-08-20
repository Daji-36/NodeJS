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
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
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
    //[DELETE] /courses/:id - soft delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => next(err));
    }
    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                return Course.updateOne(
                    { _id: req.params.id },
                    { deleted: false },
                );
            })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next);
    }
    // [DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch((err) => next(err));
    }
    // [POST] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('/me/stored/courses'))
                    .catch((err) => next(err));
                break;

            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => {
                        return Course.updateMany(
                            { _id: { $in: req.body.courseIds } },
                            { deleted: false },
                        );
                    })
                    .then(() => res.redirect('/me/trash/courses'))
                    .catch(next);
                break;

            case 'forceDelete':
                Course.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('/me/trash/courses'))
                    .catch((err) => next(err));
                break;

            default:
                res.json({ message: 'Action not found' });
                break;
        }
    }
}

module.exports = new CourseController(); // Xuất CourseController
