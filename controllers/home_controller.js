
const Members = require('../models/members');
const User = require('../models/user');



module.exports.home = async function(req, res){

    try{
        return res.render('home', {
            title: "home",
            user: "",
            admin : "",
            members: ""
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}

