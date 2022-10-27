const router = require('express').Router();

router.get('/', async (req, res) => 
    res.sendFile(path.join(__dirname, '/public/homepage.html'))
);

router.get('/login', async (req, res) =>
    res.sendFile(path.join(__dirname, '/public/login.html'))
);

router.get('/register', async (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

router.get('/:user', async (req, res) => 
    res.sendFile(path.join(__dirname, '/public/user-profile.html'))
);

router.get('/*', async (req, res)=>
    res.sendFile(path.join(__dirname, '/public/404.html'))
);

module.exports = router