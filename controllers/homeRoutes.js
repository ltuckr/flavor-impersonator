const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // get all Recipes and JOIN with user data
        const recipeData = await Recipe.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        })
        // serialize data so the template can read it
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            recipes,
            loggin_in: req.session.loggin_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/recipes', async (req, res) => {
  try {
      // get all Recipes and JOIN with user data
      const recipeData = await Recipe.findAll({
          include: [
              {
                  model: User,
                  attributes: ['name'],
              },
          ],
      })
      // serialize data so the template can read it
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('browseRecipes', {
          recipes,
          loggin_in: req.session.loggin_in
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        // organizing the data
        const recipe = recipeData.get({ plain: true });

        // rendering the html through handlebars
        res.render('recipeDetails', {
            ...recipe,
            loggin_in: req.session.loggin_in
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
        include: [{ model: Recipe }],
      });
      const user = userData.get({ plain: true });
      res.render('profile', {
        ...user,
        logged_in: true
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
    res.render('signup');
  });

  router.get('/submit-recipes', async (req, res) => {
    try {
        // get all Recipes and JOIN with user data
        const recipeData = await Recipe.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        })
        // serialize data so the template can read it
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  
        // Pass serialized data and session flag into template
        res.render('submitRecipes', {
            recipes,
            loggin_in: req.session.loggin_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
  });

  module.exports = router;