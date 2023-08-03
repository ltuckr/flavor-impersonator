const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');
console.log("%%%%%%%%%%%%%%%%%%%%%%%%% in comments/ route: ");

router.post('/', withAuth, async (req, res) => {
    try {
      console.log(req.body);
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
// router.post('/', withAuth, (req, res) => {
//     if (req.session) {
//         Comment.create({
//                 comment_text: req.body.comment_text,
//                 recipe_id: req.body.recipe_id,
//                 user_id: req.session.user_id,
//             })
//             .then(dbCommentData => res.json(dbCommentData))
//             .catch(err => {
//                 console.log(err);
//                 res.status(400).json(err);
//             })
//     }
// });

module.exports = router;