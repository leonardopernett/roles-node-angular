import { Request, Response } from 'express'
import {getRepository} from 'typeorm'
import {User} from '../entity/User'




export const getAll = async (req:Request,res:Response)=>{
   const users = await getRepository('User').find()
   console.log(res.locals.payload)
   res.status(200).json(users)
}

export const getOne = async (req:Request,res:Response)=>{
    const { id } = req.params
    const userFind =    await getRepository(User).findOne({where:{id}})
    if(!userFind) return res.status(404).json("Not user found"); 
    return res.json(userFind)
}

export const saveOne = async (req:Request,res:Response)=>{
   const {name,lastname, email ,password, roles} = req.body
   const emailFound =  await getRepository(User).findOne({where:{email}})
   if(emailFound) return res.status(400).json('email already registred')
   
   const user =  {
     name,
     lastname,
     email,
     password,
     roles
   }
   const userCreated =   await getRepository(User).create(user)
   await getRepository(User).save(userCreated)

   return res.json({
     response:'ok', 
     message:'user created successfully'})
}

export const deleteOne = async  (req:Request,res:Response)=>{
  const  id:any  = req.query.id
  const user =  await getRepository(User).findOne({where:{id}})
  if(!user) return res.status(404).json({message:'user not found'})
  await getRepository(User).delete(id)
  return res.status(200).json({message:'user deleted successfully'})
}

export const editOne = async (req:Request,res:Response)=>{
  const { name,lastname, email ,password, roles} = req.body
  const  id:any  = req.params.id
  const user =  {
    name,
    lastname,
    email,
    password,
    roles
  }
   const userFind =  await getRepository(User).findOne({where:{id}})
   if(!userFind) return res.status(404).json({message:'user not found'})
   const newUSer =  Object.assign(userFind, user)
   await getRepository(User).save(newUSer)
   return res.json({message:'user edit'})

}