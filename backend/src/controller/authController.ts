import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'
import { compare } from 'bcryptjs'
import { generarToken } from '../jwt/generarToken'

export const login = async  (req:Request, res:Response) => {

   const {email , password}= req.body

   const user = await getRepository(User).findOne( { where: { email } } )
   if(!user) return res.status(400).json({ message:'users or password incorrect'})

   const verifymatch = await compare(password,user.password)
   
   if(!verifymatch) return res.status(400).json( { message:'users or password incorrect' } )
   const token =  generarToken(user)
   return res.status(200).json({
      message:"0k",
      roles:user.roles,
      userId:user.id,
      acessToken:token
    })
}