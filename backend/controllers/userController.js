import asyncHandler from "express-async-handler";
import axios from "axios"
import User from "../models/userModel.js"


//@desc Register admin 
//@route POST /api/users/admin
//@access No one
const registerAdmin = asyncHandler(async (req, res) => {
  const { firstName, lastName, email } = req.body
  const doesExist = await User.findOne({email})

  if(!firstName || !lastName || !email) {
    res.status(400)
    throw new Error('Add all fields')
  }

  if(doesExist) {
    res.status(400)
    throw new Error('Admin alreay registered')
  }

  const admin = await User.create({firstName, lastName, email})
  res.status(200).json(admin)
})

//@desc Auth user/set token
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const doesExist = await User.findOne({email})
  if(!doesExist) {
    res.status(404)
    throw new Error('User not registred, check with your admin')
  }
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: 'https://www.serieafantasy.com/api/v0/users/token/',
    data: {
      email, password
    }
  }

  try {
    const response = await axios.request(config)
    const data = await response.data
    console.log(data)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }

});

//@desc Auth user refresh token
//@route POST /api/users/auth/refresh
//@access Private
const authRefreshToken = asyncHandler(async (req, res) => {
  const { refresh } = req.body
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: 'https://www.serieafantasy.com/api/v0/users/token/refresh/',
    data: {refresh}
  }
  try {
    const response = await axios.request(config)
    const data = await response.data
    console.log(data)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})


//@desc Logout user
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});


export {
  registerAdmin,
  authUser,
  authRefreshToken,
  logoutUser
};
