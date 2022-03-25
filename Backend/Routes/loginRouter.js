const express = require('express');
const { getUser } = require('../Services/userService');
const { generateAccessToken } = require('../utils/auth');
const { handleBadRequest } = require('../utils/responseHandlers');
const Router = express.Router();

Router.post('/',async (req,res)=>{
  let {username,password} = req.body;
  if(typeof username ==="string" && typeof password === "string" ){
      const user = await getUser(username,password);
      if(user){
          return res.status(200).json({token:generateAccessToken({
              username:user.username,
          })})
      }
      return handleBadRequest(res,{},"Invalid username or password")
  }
  return handleBadRequest(res,{},"Invalid username or password")  
})
module.exports = Router;