import {
   Entity, 
   Column, 
   PrimaryGeneratedColumn,
   CreateDateColumn,
   UpdateDateColumn, 
   BeforeInsert,
   BeforeUpdate} from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')

export class User {

   @PrimaryGeneratedColumn()
   id:number

   @Column({type:'varchar',length:255})
   name:string

   @Column({type:'varchar',length:255})
   lastname:string


  @Column({type:'varchar', unique:true, nullable:false})
  email:string
  
  @Column({type:'varchar',nullable:false})
  password:string
  
  @Column({type:'varchar',length:15})
  roles:string

  @CreateDateColumn({name:'createdAt',type:'timestamp'})
  created:Date

  @UpdateDateColumn({name:'updatedAt',type:'timestamp'})
  update:Date


  @BeforeInsert()
  @BeforeUpdate()
  async encryptPasswprd(){
   if(!this.password) return 
   this.password = await bcrypt.hash(this.password,10)
  }
}