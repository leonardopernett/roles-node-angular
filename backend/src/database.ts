import { createConnection } from 'typeorm'
import { User } from './entity/User'

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "roles",
    entities:[User],
    synchronize: true,
}).then( (db ) =>console.log('db isconnected'))
  .catch ((error) =>console.log(error))  