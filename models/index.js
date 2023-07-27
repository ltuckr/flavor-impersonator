const User = require('./User');
const Recipe = require('./Comments');
const  Comments = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

Recipe.hasMany(Comments, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});
  
Comments.belongsTo(Recipe, {
  foreignKey: 'recipe_id'
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Comments.belongsTo(User, {
    foreignKey: 'user_id'
}); 
  
module.exports = { User, Recipe, Comments };
