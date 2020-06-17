module.exports = (app) => {
    const blogs = require('../controllers/blog.controller.js');

    app.post('/addBlog', blogs.create);

    app.get('/showBlogs', blogs.findAll);

}