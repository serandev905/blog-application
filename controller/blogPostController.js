const BlogPost = require('../models/BlogPost');

exports.createNewBlogPost = (req, res, next) => {
    const { title, content, tags, imageUrl } = req.body;
    const blogPost = new BlogPost({ title, content, tags, imageUrl, author: req.user.userId }); //passing current uset id
    blogPost.save()
        .then(blogPost => res.json(blogPost))
        .catch(err => {
            if(err.code === 11000) {
                return res.status(409).json({ message: 'Title already in use'});
            }
            res.status(400).json(err)
        });
}

exports.filterPostByTags = (req, res, next) => {
    const query = req.query;
    BlogPost.find(query).populate("author") //populate user's record
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err));
}


exports.getPostById = (req, res, next) => {
    BlogPost.findById(req.params.id).populate("author") //populate user's record
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err));
}

exports.updatePostById = async (req, res, next) => {
    await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err));
}

exports.deletePostById = (req, res, next) => {
    BlogPost.findOneAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Post deleted' }))
        .catch(err => res.status(400).json(err));
}