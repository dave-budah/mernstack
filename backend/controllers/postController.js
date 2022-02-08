const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')

// Get all posts
// GET /api/posts
// Private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})


// Create post
// GET /api/post
// Private
const createPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add main content body.')
    }
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add tile.')
    }
    const post = await Post.create({
        text: req.body.text,
        title: req.body.title
    })
    res.status(200).json(post)
})

// UPDATE post
// UPDATE /api/post/:id
// Private
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById((req.params.id))

    if(!post){
        res.status(400)
        throw new Error('Post with that ID does not exist.')
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedPost)
})

// Delete post
// DELETE /api/post/:id
// Private
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById((req.params.id))

    if(!post){
        res.status(400)
        throw new Error('Post with that ID does not exist.')
    }
    await post.remove()
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}
