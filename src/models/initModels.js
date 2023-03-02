const Users = require('./users.models');
const Posts = require('./posts.models');
const Categories = require('./categories.models');
const Answers = require('./answers.models');

const initModels = () => {
    Users.hasMany(Posts, { foreignKey: 'author'});
    Posts.belongsTo(Users, { foreignKey: 'author'});

    Users.hasMany(Answers, { foreignKey: 'author'});
    Answers.belongsTo(Users, { foreignKey: 'author'});

    Posts.hasMany(Answers, { foreignKey: 'postId'});
    Answers.belongsTo(Posts, { foreignKey: 'postId'});

    Categories.hasMany(Posts, { foreignKey: 'categoryId'});
    Posts.belongsTo(Categories, { foreignKey: 'categoryId'});
};

module.exports = initModels;