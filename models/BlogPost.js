const mongoose = require('mongoose');
const BlogPostSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
    unique: true
},
 content: String,
 tags: [String],
 imageUrl: {
    type: String,
    required: true, 
    trim: true,
  },
 author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 creationDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model('BlogPost', BlogPostSchema);