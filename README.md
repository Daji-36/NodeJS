# NodeJS Course Management Project

## Introduction

This is a course management project built with Node.js, Express, MongoDB (Mongoose), Express-Handlebars, and Bootstrap. The project supports CRUD operations, soft delete (trash), restore, permanent delete, bulk select/delete, and automatic code formatting with Husky/lint-staged.

## Main Features

- Manage courses: add, edit, soft delete, permanent delete, restore
- Soft delete: deleted courses are moved to trash, can be restored or permanently deleted
- Bulk select and delete courses
- Beautiful UI with Bootstrap and Express-Handlebars
- Course search functionality
- Automatic code formatting on commit with Husky and lint-staged

## Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- Express-Handlebars
- Bootstrap
- Husky, lint-staged, Prettier

## Folder Structure

```
Project/
├── package.json
├── src/
│   ├── index.js
│   ├── app/
│   │   ├── controllers/
│   │   │   ├── CourseController.js
│   │   │   └── MeController.js
│   │   ├── models/
│   │   │   └── Course.js
│   │   └── util/
│   │       └── mongoose.js
│   ├── routes/
│   │   ├── courses.js
│   │   ├── me.js
│   │   └── ...
│   ├── resources/
│   │   ├── views/
│   │   │   ├── me/
│   │   │   │   ├── stored-courses.hbs
│   │   │   │   └── trash-courses.hbs
│   │   │   └── ...
│   │   ├── scss/
│   │   │   └── app.scss
│   │   └── ...
│   └── public/
│       └── ...
└── ...
```

## Installation & Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB (local or cloud)
4. Run the project:
   ```bash
   npm start
   ```
5. Access: [http://localhost:3000](http://localhost:3000)

## Notes

- Make sure MongoDB is installed and the connection is configured in `src/config/db.js`
- Husky and lint-staged are pre-configured for automatic code formatting on commit

## License

MIT

## Src: F8
