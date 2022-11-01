const router = require('express').Router();
const { User } = require('../models');
const { Game } = require('../models');

router.get('/user-profile', async (req, res) => {
    try{ 
        const userData = await User.findByPk(req.params.username);
        if(!userData) {
            res.status(404).json({message: 'No user with this username!'});
            return;
        }
        const user = userData.get({ plain: true });
        res.render('user-profile', { user } );
      } catch (err) {
          res.status(500).json(err);
      };     
  });

router.get('/game-page', async (req, res) => {
try{ 
    const gameData = await Game.findByPk(req.params.id);
    if(!gameData) {
        res.status(404).json({message: 'No game with this id!'});
        return;
    }
    const game = gameData.get({ plain: true });
    res.render('game-page', { game } );
    } catch (err) {
        res.status(500).json(err);
    };     
});


module.exports = router;
