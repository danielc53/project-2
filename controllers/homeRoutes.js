const router = require('express').Router();
const path = require('path');

// router.get('/', async (req, res) => 
//     res.sendFile(path.join(__dirname, '../public/homepage.html'))
// );

// router.get('/login', async (req, res) =>
//     res.sendFile(path.join(__dirname, '../public/login.html'))
// );

router.get('/register', async (req, res) =>
    res.sendFile(path.join(__dirname, '../public/register.html'))
);

router.get('/:user', async (req, res) => 
    res.sendFile(path.join(__dirname, '../public/user-profile.html'))
);

// router.get('/*', async (req, res)=>
//     res.sendFile(path.join(__dirname, '../public/404.html'))
// );

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router