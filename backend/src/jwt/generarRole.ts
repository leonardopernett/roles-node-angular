import { NextFunction, Response, Request } from "express"
import {getRepository} from 'typeorm'
import { User } from "../entity/User"
import { IUser } from "../interface/user.interface"

export const checkRole = ( role:Array<string> )=>{
   return async (req:Request, res:Response, next:NextFunction) =>{
      try {
         const { id }= res.locals.payload
         const user = await getRepository(User).findOne({where:{id}}) as IUser
         const { roles } = user 
         if(role.includes(roles)){
           next()
         }else{
            return res.status(403).json('not Authorized')
         }
       
      } catch (error) {
         console.log(error)
      }
   }

}