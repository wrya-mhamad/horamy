const User = require('../models/User')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    username = req.body.username
    password = req.body.password

    const user = await User.filter(user => user.username == username && user.password == password)
    console.log(user);
    
    if(user.length != 0){
        const token = jwt.sign({username: user.username, password: user.password}, 'ahmedHoramy')
        res.send({token: token})
    }else{
        res.send({token: '', msg: 'ناوی بەکارهێنەر یان ووشەی نهێنی هەڵەیە'})
    }

}

module.exports = login