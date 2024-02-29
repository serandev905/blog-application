const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
const commentController = require('../controller/commentController')

// (Routes for managing comments go here)
router.post('/', authMiddleware.authenticateUser, commentController.createPostComments);

router.get('/', commentController.getAllPostComments);

router.get('/:id', commentController.getPostCommentById);

router.put('/:id', authMiddleware.authenticateUser, commentController.updateCommentById);

router.delete('/:id', authMiddleware.authenticateUser, commentController.updateCommentById);

module.exports = router