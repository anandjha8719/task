const Admin = require('../models/admin');
const Members = require('../models/members')

module.exports.signIn = async function (req, res) {

    return res.render('admin_sign_in', {
        title: "admin signin page"
    })
}

module.exports.createSession = async function (req, res) {
    try {
        let admin = await Admin.findOne({ email: req.body.email });


        let members = await Members.find({})
        .sort('-createdAt')

        console.log(req.body, '*******************');
        if (admin.email == req.body.email) {
            return res.render('home', {
                admin: admin,
                user: "",
                members: members,
                title: 'success'
            });
        } 

    }catch (err) {
        return res.render('error');
    }
}

module.exports.sort = async (req, res) => {
    try{
        let admin = await Admin.findOne({ email: req.body.email });

        let members = await Members.find({})
        .sort('createdAt')

        return res.render('home', {
            admin: admin,
            user: "",
            members: members,
            title: 'sorted'
        });
    } catch(err){
        console.log(err);
        return res.render('error');
    }
}