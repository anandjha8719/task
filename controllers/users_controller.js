const User = require('../models/user');
const Members = require('../models/members')
let user;

module.exports.signIn = async function (req, res) {

    return res.render('user_sign_in', {
        title: "signin page"
    })
}

module.exports.createSession = async function (req, res) {
    try {
        user = await User.findOne({ email: req.body.email });
        console.log(req.body, '*******************');
        if (user.email == req.body.email) {
            return res.render('home', {
                user: user,
                title: 'success',
                admin: "",
                members: ""
            });
        } 

    }catch (err) {
        return res.render('error');
    }
}

module.exports.select = async (req, res) => {
    try{
        console.log(req.body)
        Members.create({
            name: req.body.memberName,
            selectedBy: user.name
        })
        return res.render('home', {
            user: user,
            admin: "",
            members: "",
            title: 'member selected'
        });
                
            
        
        
    } catch(err){
        return res.render('error');
    }
}