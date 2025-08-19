module.exports = {
    // Dùng khi cần chuyển đổi nhiều đối tượng Mongoose
    multipleMongooseToObject: (mongoose) => {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    // Dùng khi cần chuyển đổi một đối tượng Mongoose
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
// Logic: Chuyển đổi đối tượng Mongoose thành đối tượng JavaScript thuần túy
