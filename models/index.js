const User = require('./User');
const Game = require('./Game');
const Post = require('./Post')

User.hasMany(Post, Game, {
    foreignKey: 'user_post',
})

Post.belongsTo(User,{
    foreignKey: 'user_post',
});

module.exports = {User,Game,Post};