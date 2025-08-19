const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

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

// Add plugin
mongoose.plugin(slug); // Add slug plugin
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true }); // Add soft delete plugin

module.exports = mongoose.model('Course', Course);
