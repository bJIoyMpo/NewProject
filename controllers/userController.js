const config = require('../config/db');
const User = require('../models/user');

module.exports.signIn = async function (req, res, next) {
    const user = await User.findOne({username: req.body.username});
    if (!user) {
        return next(new Error('This user not found'));
    } else {
        res.send({ result:userId = user._id})
    };
};

module.exports.signUp = async function (req, res, next) {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
        const userNew = new User();
        userNew.username = req.body.username;
        userNew.password = req.body.password;
        await
            userNew.save();

        const userId = userNew._id.toString();
        res.send({ result: 'registration completed'})
    } else {
        res.send({ result: 'user is already registered'})
    }
};