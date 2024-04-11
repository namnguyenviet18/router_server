
const route = require('express').Router();

const data = {
    'first-blog-post': {
        title: 'First Blog Post Xin chao anh em',
        description: "Lorem ipsum dolor sit amet, consectetur adip."
    },
    'second-blog-post': {
        title: 'Second Blog Post Xin chao anh em',
        description: 'Hello React Router v6'
    }
}

route.get('/getPost', (req, res) => {
    res.status(200).json(
        {
            status: true,
            data: data
        }
    );
});

route.get('/getPostDetails/:slug', (req, res) => {
    const slug = req.params.slug;
    res.status(200).json({ status: true, data: data[slug] });
});

module.exports = route;

