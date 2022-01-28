const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get()
    .post();

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

    router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;