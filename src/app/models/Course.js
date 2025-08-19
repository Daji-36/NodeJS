const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug); // Thêm plugin slug vào mongoose

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxlength: 255, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        videoID: { type: String, maxlength: 255, required: true },
        levels: { type: String, maxlength: 255, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Course', Course);
