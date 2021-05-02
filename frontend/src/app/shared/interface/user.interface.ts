export interface User {
    email:string;
    password:string
}

export interface UserResponse{
  userId:number;
  message:string;
  roles:string;
  acessToken:string;
}