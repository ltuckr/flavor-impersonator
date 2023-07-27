const sequelize = require('../config/connection');
const { User, Recipe, Comments } = require('../models'); 
const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Seed recipes
  const recipes = await Recipe.bulkCreate(recipeData); 

  // Seed comments
  const comments = await Comments.bulkCreate(commentData); 

  // Assign comments to recipes and users
  for (const comment of comments) {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]; 
    await comment.setRecipe(randomRecipe);
    await comment.setUser(randomUser);
  }

  process.exit(0);
};

seedDatabase();
