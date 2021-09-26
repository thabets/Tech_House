// import all models
const Post = require("./Post");
const User = require("./User");

const Comment = require("./Comment");

// create associations

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
//user.hasMany(posts,{

//})
//comment.belongsto(post)

module.exports = { User, Post, Comment };
