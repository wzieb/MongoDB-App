const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId
router.route('/:userId/friends/:friendId').post(createFriend);

// /api/students/:userId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
