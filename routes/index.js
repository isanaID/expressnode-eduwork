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
    const {id} = req.params;
    res.send({
        status: 'success',
        message: 'Product details',
        id
    });
});

router.post('/product', upload.single('image'), (req, res) => {
    const {name, price, stock} = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target, err => {
            if(err) throw err;
        });
    }
});

module.exports = router;