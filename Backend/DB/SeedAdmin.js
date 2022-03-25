const UserModel = require("./Schema/userSchema");

async function addAdminRecord(){

    let users = await UserModel.find().count();
    if(users === 0){
        let user = new UserModel({
            username:process.env.ADMIN_USER_NAME||"admin",
            password:process.env.ADMIN_USER_PASS||"admin"
        });
        await user.save();
        console.log(`Credentials Seeded \n  Username :${user.username} \n Password: ${user.password}`)
    }
}

module.exports ={addAdminRecord};