
const route = require('express').Router();

route.post('/login', (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        if (username === 'admin' && password === '123') {
            return res.status(200).json({ status: true, msg: "Đăng nhập thành công" });
        } else {
            return res.status(200).json({ status: false, msg: "Đăng nhập thất bại" });
        }
    } catch (err) {
        res.status(500).json({ status: false, msg: err.message });
    }
});

module.exports = route; 