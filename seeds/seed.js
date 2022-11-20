const sequelize = require('../config/connection');
const { User, Project, Post, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // a random user id from the list of users gets assigned to a post

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  const posts = await Post.findAll();

  for (const comment of commentData) {
    await Comment.create({
      ...comment,     // spread operator gettin key neames of object
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: posts[Math.floor(Math.random() * posts.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();
