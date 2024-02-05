const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
 

const UserModel = require('../models/user');
const LOGIN = '/login';
const REGISTER = '/register';

router.post(REGISTER, async(req, res) => {
    try {
        const userData = req.body;
        const hasedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hasedPassword;
        const user = new UserModel({...userData});
        await user.save();
        res.status(200).json({message: 'User registed successfully'});
    } catch(error) {
        console.log(error);
        res.status(500).json({error: 'Registration failed'});
    }
});

router.post(LOGIN, async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({username});
        if(!user) {
            return res.status(401).json({error: 'Authentication failed'});
        } 
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(401).json({error: 'Authentication failed'});
        }

        const token = jwt.sign({userId: user._id}, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({token});

    } catch(error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong"})
    }
});
 

module.exports = router;

