const {DataTypes} = require('sequelize');

const db = require('../utils/database');

const Answer = db.define('answers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'post_id'
  },
},{
  timestamps: true,
  updatedAt: false,
});

module.exports = Answer;