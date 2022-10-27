const User = require('./User');
const Game = require('./Game');
const Post = require('./Post')

User.hasMany(Game, {
    foreignKey: 'user_post',
});

User.hasMany(Post, {
    foreignKey: 'user_post',
});

Post.belongsTo(User,{
    foreignKey: 'user_post',
});

module.exports = {User,Game,Post};
