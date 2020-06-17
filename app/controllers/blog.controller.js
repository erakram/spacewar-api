const Blog = require('../models/blog.model.js');


exports.create = (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "Blog content can not be empty"
        });
    }

    const blog = new Blog({
        title: req.body.title || "Untitled Blog", 
        content: req.body.content
    });

    blog.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Blog."
        });
    });
};

exports.findAll = (req, res) => {
    Blog.find()
    .then(blogs => {
        res.send(blogs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving blogs."
        });
    });
};
