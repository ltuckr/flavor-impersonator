const router = require('express').Router();
const { Recipe, User, Comments } = require('../models');
const withAuth = require('../utils/auth');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  try {
    // get all Recipes and JOIN with user data
    const recipeData = await Recipe.findAll({
      limit: 3,
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
   
    // Pass serialized data and session flag into template
    res.render('homepage', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/recipes', async (req, res) => {
  try {
    // get all Recipes and JOIN with user data
    const input = req.query.input;
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
      where: input
        ? {
            ingredients: {
              [Op.like]: `%${input}%`,
            },
          }
        : {},
    });

    // serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('browseRecipes', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipe/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comments,
          include: [User],
        },
      ],
      order: [
        [Comments, 'date_created', 'DESC']
      ],    

    });
    // organizing the data
    const recipe = recipeData.get({ plain: true });

    // rendering the html through handlebars
    res.render('recipeDetails', {
      ...recipe,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ 
        model: Recipe,
        include: [User],
      }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signUp');
});

router.get('/submit-recipes', withAuth, async (req, res) => {
  try {
    // get all Recipes and JOIN with user data
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('submitRecipes', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
