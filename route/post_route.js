
const route = require('express').Router();
const BlogPosts = require('../data/posts');

route.get('/getPosts', async (req, res) => {
    try {
        res.status(200).json({ status: true, data: BlogPosts });
    } catch (err) {
        res.status(500).json({ status: false, msg: err.message });
    }

});

route.get('/getPostDetails/:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        console.log(slug);
        for (let i = 0; i < BlogPosts.length; i++) {
            if (BlogPosts[i].slug === slug) {
                return res.status(200).json({ status: true, msg: "Tiem kiem thanh cong", data: BlogPosts[i] });
            }
        }

        return res.status(400).json({ status: false, msg: "Khong tim thay Post nao" });
    } catch (err) {
        res.status(500).json({ status: false, msg: err.message });
    }

});

route.post('/createPost', async (req, res) => {
    try {

        if (req.body) {

            BlogPosts.push(req.body);
            console.log(BlogPosts);
            res.status(200).json({ status: true, msg: "Tao bai viet thanh cong" });
        }
    } catch (err) {
        res.status(500).json({ status: true, msg: err.message });
    }
});

module.exports = route;

