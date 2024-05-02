
const router = require('express').Router();
const Posts = require('../postModel');
const BlogPosts = require('../data/posts');

// route.get('/getPosts', async (req, res) => {
//     try {
//         res.status(200).json({ status: true, data: BlogPosts });
//     } catch (err) {
//         res.status(500).json({ status: false, msg: err.message });
//     }

// });

router.get("/getPosts", async (req, res) => {
    try {
        const posts = await Posts.find({});
        res.status(200).json({ status: true, data: posts });
    } catch (err) {
        res.status(500).json({ status: false, msg: err.message });
    }
});

// route.get('/getPostDetails/:slug', async (req, res) => {
//     try {
//         const slug = req.params.slug;
//         console.log(slug);
//         for (let i = 0; i < BlogPosts.length; i++) {
//             if (BlogPosts[i].slug === slug) {
//                 return res.status(200).json({ status: true, msg: "Tiem kiem thanh cong", data: BlogPosts[i] });
//             }
//         }

//         return res.status(400).json({ status: false, msg: "Khong tim thay Post nao" });
//     } catch (err) {
//         res.status(500).json({ status: false, msg: err.message });
//     }

// });



router.get("/getPostDetails/:slug", async (req, res) => {
    try {
        const post = await Posts.findOne({ slug: req.params.slug });
        return res.status(200).json({ status: true, msg: "Tiem kiem thanh cong", data: post });
    } catch (error) {
        res.status(500).json({ status: false, msg: error.message });
    } s
});

// route.post('/createPost', async (req, res) => {
//     try {

//         if (req.body) {

//             BlogPosts.push(req.body);
//             console.log(BlogPosts);
//             res.status(200).json({ status: true, msg: "Tao bai viet thanh cong" });
//         }
//     } catch (err) {
//         res.status(500).json({ status: true, msg: err.message });
//     }
// });

router.post("/createPost", async (request, response) => {
    const post = new Posts(request.body);
    try {
        await post.save();
        response.status(200).json({ status: true, msg: "Tao bai viet thanh cong" });
    } catch (error) {
        response.status(500).json({ status: true, msg: error.message });
    }
});

router.delete("/deletePost/:slug", async (request, response) => {
    try {
        const post = await Post.findByIdAndDelete(request.params.slug);
        if (!post) {
            return response.status(404).send({ status: false, msg: "Khong có post nao phu hop" });
        }
        response.status(200).send({ status: true, msg: "Xoa post thanh cong" });
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.patch("/updatePost/:slug", async (request, response) => {
    try {
        const post = await Post.findByIdAndUpdate(request.params.slug,
            request.body,);
        await post.save();
        response.status(200).json({ status: true, msg: "Cap nhat thanh cong", post: post });
    } catch (error) {
        response.status(500).send({ error });
    }
});
module.exports = router;



