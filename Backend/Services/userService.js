const UserModel = require("../DB/Schema/userSchema");

async function getUser(username,password){
    let user = UserModel.findOne({
        username,
        password
    });
    if(!!user){
        return user;
    }
    return false;

}

module.exports ={
    getUser
}