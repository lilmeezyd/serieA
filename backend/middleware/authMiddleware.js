import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async(req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.body.headers.authorization || req.headers.Authorization || req.body.headers.Authorization

    if(authHeader && authHeader?.startsWith('Bearer')) {
        try {
            // Get token from header
            token = authHeader.split(' ')[1]
            console.log(req.user)

            // verify token
            //const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //console.log(decoded)

            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not authorized!')
        }
    }
    
    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

/*
const roles = (...allowedRoles) => {
    return(req, res, next) => {
        if(!req?.user.roles) return res.status(401).json({msg: 'Not Authorized'})
        const rolesArray = [...allowedRoles]
        const result = Object.values(req.user.roles).map(role => rolesArray.includes(role)).find(val => val === true)
        if(!result) return res.status(401).json({msg: 'Not Authorized'})
        next()
    }
}*/


export { protect }