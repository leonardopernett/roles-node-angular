import jwt from 'jsonwebtoken'


export const generarToken = (user:any) => {
 return jwt.sign(
   {id:user.id}, 'secretKey', {expiresIn:'1h'})
}