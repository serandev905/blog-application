const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
const blogPostController = require('../controller/blogPostController')

// Routes for managing blog posts
// Create new Post
router.post('/', authMiddleware.authenticateUser, blogPostController.createNewBlogPost);

// filter posts by tags through QueryParams
router.get('/', blogPostController.filterPostByTags);

// find Post By the Id
router.get('/:id', blogPostController.getPostById);

// update Post
router.patch('/:id', authMiddleware.authenticateUser, blogPostController.updatePostById);

// delete Post
router.delete('/:id', authMiddleware.authenticateUser, blogPostController.deletePostById);

module.exports = router