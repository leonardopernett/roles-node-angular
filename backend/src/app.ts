import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { resolve } from 'path'
import router from'./router'

export class App {
   
    public app:Application
      
    constructor() {
        this.app = express()
        this.middleware()
        this.router()
        this.static()
    }

    middleware() {
        this.app.use(express.json())
        this.app.use(morgan('dev'))
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(cors({origin:'*'}))
        this.app.use(helmet())
    }

    router() {
       this.app.use(router)
    }

    static() {
        this.app.use(express.static(resolve('./public')))
    }

   
}
