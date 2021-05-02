import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import {IPayload} from '../interface/payload.interface'

export const verifyToken = (req:Request,res:Response,next:NextFunction)=>{
     if(!req.headers['authorization']){
       return res.status(403).json('not unathorized')
     }
     const token = req.headers['authorization'].split(' ')[1]
     const payload = jwt.verify(token,'secretKey') as IPayload
     if(!payload){
      return res.status(403).json('not unathorized') 
    }
    res.locals.payload = payload
    next()
} 