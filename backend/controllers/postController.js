const asyncHandler = require('express-async-handler')

// Get all posts
// GET /api/posts
// Private
const getPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get posts'})
})


// Create post
// GET /api/post
// Private
const createPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add main content body.')
    }
})

// UPDATE post
// UPDATE /api/post/:id
// Private
const updatePost = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update post`})
})

// Delete post
// DELETE /api/post/:id
// Private
const deletePost = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete post`})
})

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}
