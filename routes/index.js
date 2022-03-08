const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const upload = multer({dest: 'uploads'});

router.get('/', (req, res) => {
    const {page, total} = req.query;
    res.send({
        status: 'success',
        message: 'Welcome to the API',
        page,
        total
    });
});

router.get('/product/:id', (req, res) => {
    res.send({
        id: req.params.id,
    });
});

router.post('/product/', upload.single('image'), (req, res) => {
    const {name, price, stock} = req.body;
    const image = req.file;
    fs.rename(image.path, path.join(__dirname, '../uploads', image.originalname), (err) => {
        if (err) {
            return res.send({
                status: 'failed',
                message: 'Failed to upload image'
            });
        }
        res.send({
            status: 'success',
            message: 'Successfully uploaded image',
            data: {
                name,
                price,
                stock,
                image: image.originalname
            }
        });
    });
});

module.exports = router;