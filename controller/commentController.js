const Comment = require('../models/Comment');

exports.createPostComments = (req, res, next) => {
    const { text, blogPost } = req.body;
    const comment = new Comment({ commenter: req.user.userId, text, blogPost });
    comment.save()
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json(err));
}

exports.getAllPostComments = (req, res, next) => {
    Comment.find().populate("blogPost") //populate blog post
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json(err));
}

exports.getPostCommentById = (req, res, next) => {
    Comment.findById(req.params.id).populate("blogPost") //populate blog post
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json(err));
}

exports.updateCommentById = (req, res, next) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json(err));
}

exports.deleteCommentById = (req, res, next) => {
    Comment.findByIdAndRemove(req.params.id)
        .then(() => res.json({ message: 'Comment deleted' }))
        .catch(err => res.status(400).json(err));
}
