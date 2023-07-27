const sequelize = require('../config/connection');
const { User, Recipe, Comment } = require('../models'); 
const userData = require('./userData.json');
const projectData = require('./recipeData.json');
const commentData = require('./commentData.json'); 

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Seed recipes
  const projects = await Recipe.bulkCreate(projectData);

  // Seed comments
  const comment = await Comments.bulkCreate(commentData);

  // Assign comments to recipes and users
  for (const comment of comments) {
    const randomRecipe = Recipe[Math.floor(Math.random() * recipes.length)];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    await comment.setRecipe(randomRecipe);
    await comment.setUser(randomUser);
  }

  process.exit(0);
};

seedDatabase();