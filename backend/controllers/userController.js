import asyncHandler from "express-async-handler";
import axios from "axios"

//@desc Auth user/set token
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
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
  authUser,
  authRefreshToken,
  logoutUser
};
