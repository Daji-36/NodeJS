module.exports = {
    // Dùng khi cần chuyển đổi nhiều đối tượng Mongoose
    multipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map((item) => {
            // Kiểm tra xem đối tượng có phương thức toObject không
            return item && typeof item.toObject === 'function'
                ? item.toObject()
                : item;
        });
    },
    // Dùng khi cần chuyển đổi một đối tượng Mongoose
    mongooseToObject: (mongoose) => {
        // Kiểm tra xem đối tượng có phương thức toObject không
        return mongoose && typeof mongoose.toObject === 'function'
            ? mongoose.toObject()
            : mongoose;
    },
};
// Logic: Chuyển đổi đối tượng Mongoose thành đối tượng JavaScript thuần túy
